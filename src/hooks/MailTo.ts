import emailjs from '@emailjs/browser';

//REMPLACEZ CES VALEURS PAR LES VÔTRES (trouvées sur EmailJS.com)
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_6vzsata',        
  TEMPLATE_ID: 'template_vbdgxpf',      
  PUBLIC_KEY: 'BWC3FvpTi2fyHBRro',        
  TO_EMAIL: 'nguessanaxel21@gmail.com', //email de réception
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  urgency: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Service d'envoi d'emails direct depuis le frontend
 */
export class EmailService {
  private initialized = false;

  constructor() {
    this.init();
  }

  private init() {
    if (!this.initialized && EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      this.initialized = true;
    }
  }

  /**
   * Envoie le formulaire de contact par email
   */
  async sendContact(formData: ContactFormData): Promise<EmailResponse> {
    try {
      // Validation des données requises
      if (!formData.name || formData.name.trim().length < 2) {
        return {
          success: false,
          message: 'Le nom doit contenir au moins 2 caractères'
        };
      }

      if (!formData.email || !this.isValidEmail(formData.email)) {
        return {
          success: false,
          message: 'Veuillez entrer une adresse email valide'
        };
      }

      if (!formData.message || formData.message.trim().length < 10) {
        return {
          success: false,
          message: 'Le message doit contenir au moins 10 caractères'
        };
      }

      // Préparation des données pour le template
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone?.trim() || 'Non renseigné',
        company: formData.company?.trim() || 'Non renseigné',
        service: formData.service || 'Non spécifié',
        message: formData.message.trim(),
        urgency: formData.urgency || 'Normale',
        date: new Date().toLocaleDateString('fr-FR'),
        timestamp: new Date().toISOString(),
      };

      console.log('📤 Envoi EmailJS avec les données:', templateParams);

      // Envoi de l'email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email envoyé avec succès:', response);

      return {
        success: true,
        message: '✅ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      };

    } catch (error: any) {
      console.error('❌ Erreur lors de l\'envoi EmailJS:', error);
      
      let errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
      
      if (error?.status === 0) {
        errorMessage = 'Impossible de se connecter au service d\'envoi. Vérifiez votre connexion internet.';
      } else if (error?.status === 400) {
        errorMessage = 'Les données du formulaire sont incorrectes.';
      }
      
      return {
        success: false,
        message: `❌ ${errorMessage}`
      };
    }
  }

  /**
   * Validation d'email simple
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Test de connexion au service EmailJS
   */
  async testConnection(): Promise<boolean> {
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          from_name: 'Test Connection',
          from_email: 'test@example.com',
          message: 'Test de connexion au service EmailJS',
          date: new Date().toISOString(),
        }
      );
      return true;
    } catch {
      return false;
    }
  }
}

// Exportez une instance unique
export const emailService = new EmailService();