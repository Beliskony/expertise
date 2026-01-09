import React, { useState } from "react"
import { Leaf } from "lucide-react"
import TabPC from "./TabPC"
import TabISH from "./TabISH"
import TabSCC from "./TabSCC"

const TabsCertif = () => {
  const [activeTab, setActiveTab] = useState<"pc" | "ish" | "scc">("pc")

  const TabButton = ({ active, onClick, children } : {
    active: boolean
    onClick: () => void
    children: React.ReactNode
  }) => (
    <button onClick={onClick}
      className={`py-4 px-6 rounded-lg font-semibold transition-all border-2 min-w-37.5 text-center
        ${active 
          ? "bg-[#1a4d2e] text-white border-[#1a4d2e] shadow-lg" 
          : "bg-transparent text-gray-600 border-[#d4c5a9] hover:bg-[#1a4d2e]/5 hover:border-[#1a4d2e]/50"}
      `}
    >
      {children}
    </button>
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1a4d2e] mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification <span className="text-[#1a4d2e]">RSPO</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Roundtable on Sustainable Palm Oil – Standard mondial pour la production durable d'huile de palme
            </p>
          </div>

          {/* Tabs buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
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
          </div>

          {/* Content */}
          <div className="mt-8">
            {activeTab === "pc" && <TabPC />}
            {activeTab === "ish" && <TabISH />}
            {activeTab === "scc" && <TabSCC />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TabsCertif