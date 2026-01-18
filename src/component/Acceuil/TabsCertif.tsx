import React, { useState } from "react"
import { Leaf } from "lucide-react"
import TabPC from "./TabPC"
import TabISH from "./TabISH"
import TabSCC from "./TabSCC"
import { motion } from "framer-motion"

const TabsCertif = () => {
  const [activeTab, setActiveTab] = useState<"pc" | "ish" | "scc">("pc")

  const TabButton = ({ active, onClick, children } : {
    active: boolean
    onClick: () => void
    children: React.ReactNode
  }) => (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`py-4 px-6 rounded-lg font-semibold transition-all border-2 min-w-37.5 text-center
        ${active 
          ? "bg-[#1a4d2e] text-white border-[#1a4d2e] shadow-lg" 
          : "bg-transparent text-gray-600 border-[#d4c5a9] hover:bg-[#1a4d2e]/5 hover:border-[#1a4d2e]/50"}
      `}
    >
      {children}
    </motion.button>
  )

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-4"
            >
              <Leaf className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Certification <span className="text-[#1a4d2e]">RSPO</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Roundtable on Sustainable Palm Oil – Standard mondial pour la production durable d'huile de palme
            </motion.p>
          </motion.div>

          {/* Tabs buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <TabButton
              active={activeTab === "pc"}
              onClick={() => setActiveTab("pc")}
            >
              RSPO P&C
            </TabButton>
            <TabButton
              active={activeTab === "ish"}
              onClick={() => setActiveTab("ish")}
            >
              RSPO ISH
            </TabButton>
            <TabButton
              active={activeTab === "scc"}
              onClick={() => setActiveTab("scc")}
            >
              RSPO SCC
            </TabButton>
          </motion.div>

          {/* Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            {activeTab === "pc" && <TabPC />}
            {activeTab === "ish" && <TabISH />}
            {activeTab === "scc" && <TabSCC />}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default TabsCertif