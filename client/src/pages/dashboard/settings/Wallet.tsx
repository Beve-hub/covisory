
const Wallet = () => {
  return (
    <div className="grid items-center gap-4  p-4 mb-6 bg-[var(--card-color)] rounded-lg">
    <div>
      <p className="text-xl font-bold text-[var(--text-black)] mb-2">Wallet Address</p>
      <div className="my-2">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">BTC</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">victor </p>
      </div>
      <div className="my-2">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">ETH</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">smith</p>
      </div>
      <div className="my-2">
          <p className="text-md text-[var(--text-black)] font-bold mb-2">USDT</p>
          <p className="bg-[var(--text-white)] text-[var(--text-black)] w-full h-[3rem] px-2 flex items-center rounded-sm">love@gmail.com</p>
      </div>
    </div>
  </div>
  )
}

export default Wallet