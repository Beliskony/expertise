// Type pour les médias de la galerie
export interface IEventMedia {
  type: "image" | "video";
  url: string;
  alt?: string;
}

// Interface principale d’un événement
export interface IUpcomingEvent {
  id: number;
  title: string;
  date: string;        // ex: "15 Mars 2025" ou "22-24 Avril 2025"
  time: string;        // ex: "14h00 - 17h00"
  location: string;    // ex: "Douala, Cameroun" ou "En ligne"
  venue: string;       // ex: "Hôtel Sawa", "Zoom"
  type: string;        // ex: "Conférence Publique", "Webinaire"
  attendees: number;
  image: string;
  description: string;
  topics: string[];
  registrationOpen: boolean;
  gallery: IEventMedia[];
}


const upcomingEventsData: IUpcomingEvent[] = [
  {
    id: 1,
    title: "Durabilité dans la production d'huile de palme : Normes RSPO 2025",
    date: "15 Mars 2025",
    time: "14h00 - 17h00",
    location: "Douala, Cameroun",
    venue: "Hôtel Sawa",
    type: "Conférence Publique",
    attendees: 150,
    image: "/images/service/1.jpg",
    description:
      "Découvrez les dernières évolutions des normes RSPO et comment les implémenter efficacement dans votre production.",
    topics: ["RSPO P&C", "Certification ISH", "Traçabilité", "Chain of Custody"],
    registrationOpen: true,
    gallery: [
      { type: "image", url: "/images/service/1.jpg", alt: "Conférence RSPO" },
      { type: "image", url: "/images/service/1.jpg", alt: "Plantation durable" },
    ],
  },
];

export default upcomingEventsData
