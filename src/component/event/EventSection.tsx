// components/EventsSection.tsx
import { useState } from 'react'
import UpEvents from "./UpEvent"
import GalleryModal from "../../component/event/GalleryModal"
import upcomingEventsData from "../../data/UpComming"
import { Calendar, ImageIcon } from 'lucide-react'




const EventsSection = () => { 

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [initialMediaIndex, setInitialMediaIndex] = useState(0)


  return (
    <>
  
      {/* Events Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">

              <UpEvents 
                events={upcomingEventsData} 
              />
          

        </div>
      </section>

    </>
  )
}


export default EventsSection