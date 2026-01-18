// components/EventsSection.tsx
import { useState } from 'react'
import UpEvents from "./UpEvent"
import upcomingEventsData from "../../data/UpComming"
import { motion } from 'framer-motion'

const EventsSection = () => { 
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [initialMediaIndex, setInitialMediaIndex] = useState(0)

  return (
    <>
      {/* Events Content */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-12"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UpEvents 
              events={upcomingEventsData} 
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default EventsSection