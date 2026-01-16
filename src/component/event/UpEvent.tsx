import { Calendar, MapPin, Users } from "lucide-react"
import type { IEvents } from "../../data/UpComming"

interface UpcomingEventsProps {
  events: IEvents[]
}

const UpEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 border border-[#1a4d2e] rounded-xl shadow">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image section - plus petite et proportionnée */}
                <div className="md:w-1/3 relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />

                </div>

                {/* Content section */}
                <div className="md:w-2/3 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                  {/* Event details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-[#1a4d2e] shrink-0" />
                      <span>
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-[#1a4d2e] shrink-0" />
                      <span>
                        {event.location} - {event.venue}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4 text-[#1a4d2e] shrink-0" />
                      <span>{event.attendees} participants maximum</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Thèmes abordés :</h3>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.map((topic, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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

export default UpEvents