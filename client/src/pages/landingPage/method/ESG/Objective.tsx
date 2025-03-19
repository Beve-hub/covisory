import { useState } from "react";
import Social from "./Social";
import Governace from "./Governace";
import Envi from "./Envi";

const Objective = () => {
 const [activeTab, setActiveTab] = useState("enviroment");

  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
    <div className="max-w-6xl mx-auto items-center">
     
     {/* Text Content */}
     <div className="p-6">
        
        <h2 className="text-[var(--text-black)] text-center font-bold text-3xl py-4">
        Covisory Holding ESG Objectives
        </h2>
        <div className="text-[var(--text-black)] flex justify-center items-center mt-4 text-sm leading-relaxed">
        {['enviroment','social','governance'].map((tab) => (
             <button
             key={tab}
             className={`px-4 py-2 border-b-2 transition ${
               activeTab === tab
                 ? "bg-[var(--primary-color)] text-[var(--text-white)] rounded-lg font-bold"
                 : "border-transparent text-[var(--text-black)] "
             }`}
             onClick={() => setActiveTab(tab)}
           >
             {tab.charAt(0).toUpperCase() + tab.slice(1)}
           </button>
        ))}
        </div>
      </div>

      <div className="mt-6 text-sm text-[var(--text-black)]">
        {activeTab === "enviroment" && <Envi/>}
        {activeTab === "social" && <Social/>}
        {activeTab === "governance" && <Governace/>}
      </div>
    </div>
  </section>
  )
}

export default Objective