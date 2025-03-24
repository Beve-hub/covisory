

const Profileinput = () => {
  return (
    <div className="grid items-center gap-4  p-6 bg-[var(--card-color)] rounded-lg">
    <div>
      <p className="text-2xl font-bold text-[var(--text-black)] mb-8">Personal Information</p>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">First Name</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">victor </p>
      </div>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">Last Name</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">smith</p>
      </div>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">Email</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">love@gmail.com</p>
      </div>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">User Name</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">victor11</p>
      </div>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">Home Address</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">52 dopeIsland  across town</p>
      </div>
      <div className="my-6">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">Country</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">New zealand</p>
      </div>
    
    </div>
  </div>
  )
}

export default Profileinput