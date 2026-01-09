// components/EventsSection.tsx
import { useState } from 'react'
import UpcomingEvents from "../../component/event/UpCommingEvent"
import PastEvents from "../../component/event/PastEvents"
import GalleryModal from "../../component/event/GalleryModal"
import type { EventGalleryItem } from "../../data/PastEvent"
import pastEventsData from "../../data/PastEvent"
import upcomingEventsData from "../../data/UpComming"
import { Calendar, ChevronRight, ImageIcon } from 'lucide-react'




const EventsSection = () => { 

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedEventMedia, setSelectedEventMedia] = useState<EventGalleryItem[]>([])
  const [initialMediaIndex, setInitialMediaIndex] = useState(0)

  const openGallery = (media: EventGalleryItem[], index: number) => {
    setSelectedEventMedia(media)
    setInitialMediaIndex(index)
    setGalleryOpen(true)
  }

  return (
    <>
      {/* Tabs Navigation */}
      <section className="bg-white border-b border-[#d4c5a9] sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === "upcoming"
                  ? "border-[#1a4d2e] text-[#1a4d2e]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Événements à venir
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === "past"
                  ? "border-[#1a4d2e] text-[#1a4d2e]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Conférences passées
            </button>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {activeTab === "upcoming" ? (
            upcomingEventsData.length > 0 ? (
              <UpcomingEvents 
                events={upcomingEventsData} 
                onOpenGallery={openGallery} 
              />
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex w-20 h-20 rounded-full bg-[#d4c5a9]/30 items-center justify-center mb-6">
                  <Calendar className="w-10 h-10 text-[#1a4d2e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucun événement programmé</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Mes prochains événements seront annoncés ici. Contactez-moi pour organiser une conférence ou formation.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <ChevronRight className="w-4 h-4 text-[#ff6347]" />
                  <span>Nouveaux événements à venir bientôt</span>
                </div>
              </div>
            )
          ) : (
            <PastEvents 
              events={pastEventsData} 
              onOpenGallery={openGallery} 
            />
          )}
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        media={selectedEventMedia}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={initialMediaIndex}
      />
    </>
  )
}


export default EventsSection