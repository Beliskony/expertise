import { Calendar, MapPin, Users, ImageIcon, PlayCircle, Video } from "lucide-react"
import type { IPastEvent } from "../../data/PastEvent"
import type { EventGalleryItem } from "../../data/PastEvent"

interface PastEventsProps {
  events: IPastEvent[]
  onOpenGallery: (media: EventGalleryItem[], index: number) => void
}

const PastEvents: React.FC<PastEventsProps> = ({ events, onOpenGallery }) => {
  // Définition des types pour le bouton
  interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "outline"
    size?: "sm"
    asChild?: boolean
    children: React.ReactNode
    href?: string
  }

  const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = "outline",
    size = "sm",
    className = "",
    asChild = false,
    ...props 
  }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none"
    
    // Définition explicite des types avec Record
    const variantClasses: Record<"outline", string> = {
      outline: "border-2 border-[#d4c5a9] bg-transparent hover:bg-[#d4c5a9]/10 text-gray-700"
    }
    
    const sizeClasses: Record<"sm", string> = {
      sm: "px-3 py-1.5 text-sm"
    }

    // Pour éviter les erreurs, nous utilisons asChild seulement pour les liens
    if (asChild && props.href) {
      return (
        <a 
          className={`${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Button  
        className={`${baseStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#d4c5a9] shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image section */}
              <div 
                className="relative h-56 cursor-pointer group" 
                onClick={() => onOpenGallery(event.gallery, 0)}
              >
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  {event.gallery.length} médias
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                {/* Date and location */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                  <span>•</span>
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                {/* Title and description */}
                <h2 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">Points forts :</h3>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[#ff6347] mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery thumbnails */}
                {event.gallery.length > 1 && (
                  <div className="mb-4">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {event.gallery.slice(0, 4).map((media: EventGalleryItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => onOpenGallery(event.gallery, idx)}
                          className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 border-[#d4c5a9] hover:border-[#1a4d2e] transition-colors group"
                        >
                          {media.type === "image" ? (
                            <img
                              src={media.url || "/placeholder.svg"}
                              alt={media.alt || `Miniature ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <PlayCircle className="w-6 h-6 text-[#1a4d2e]" />
                            </div>
                          )}
                        </button>
                      ))}
                      {event.gallery.length > 4 && (
                        <button
                          onClick={() => onOpenGallery(event.gallery, 4)}
                          className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 border-[#d4c5a9] bg-gray-100 flex items-center justify-center hover:border-[#1a4d2e] transition-colors"
                        >
                          <span className="text-xs font-semibold text-gray-900">+{event.gallery.length - 4}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Attendees */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} participants</span>
                </div>

                {/* Resource buttons */}
                <div className="flex gap-3">
                  {event.videoUrl && event.videoUrl !== "#" && (
                    <Button asChild href={event.videoUrl}>
                      <span className="flex items-center">
                        <Video className="w-4 h-4 mr-2" />
                        Vidéo
                      </span>
                    </Button>
                  )}
                  {event.presentationUrl && event.presentationUrl !== "#" && (
                    <Button asChild href={event.presentationUrl}>
                      Présentation
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastEvents