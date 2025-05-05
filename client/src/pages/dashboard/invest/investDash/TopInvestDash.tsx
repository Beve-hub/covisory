import { useState } from "react";
import { SearchInput } from "../../../../utills/reusable/SearchInput"
import { useNavigate } from "react-router-dom";


const TopInvestDash = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
  return (
    <div className="mt-10">
        <div className="mt-6">
        <p className="font-bold text-2xl">Investment</p>
      </div>

      <div className="flex justify-between items-center my-[2rem]">
       <SearchInput value={query} onChange={setQuery}/>

       <div className="flex justify-start  items-center  gap-2 ">
                    <button 
                    onClick={() => navigate('/package')}
                    className="bg-[var(--text-black)] text-[var(--text-white)] px-4 py-2 rounded-md ">Packages
                    </button>
                </div>
      </div>
    </div>
  )
}

export default TopInvestDash