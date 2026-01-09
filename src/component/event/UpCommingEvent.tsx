import { Calendar, MapPin, Users, ImageIcon} from "lucide-react"
import type { IUpcomingEvent } from "../../data/UpComming"

interface UpcomingEventsProps {
  events: IUpcomingEvent[]
  onOpenGallery: (media: { url: string; type: "image" | "video" }[], index: number) => void
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, onOpenGallery }) => {


  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:gap-12">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#d4c5a9] shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div
                  className="relative min-h-48 h-100 cursor-pointer group"
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
                    <span className="bg-[#1a4d2e] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  {event.gallery.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      {event.gallery.length} photos
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
                  <p className="text-gray-600 mb-6">{event.description}</p>

                  {/* Event details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Calendar className="w-5 h-5 text-[#1a4d2e] shrink-0" />
                      <span>
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <MapPin className="w-5 h-5 text-[#1a4d2e] shrink-0" />
                      <span>
                        {event.location} - {event.venue}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Users className="w-5 h-5 text-[#1a4d2e] shrink-0" />
                      <span>{event.attendees} participants maximum</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Thèmes abordés :</h3>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, idx) => (
                        <span key={idx} className="bg-[#1a4d2e]/10 text-[#1a4d2e] px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents