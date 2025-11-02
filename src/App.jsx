import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(6000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers)

  const removePlayre = (p) => {
    const filteredData = purchasedPlayers.filter(player => player.player_name !== p.player_name)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price.split('$').join('')))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance} ></Navbar>
      <div className='bg-white text-black max-w-[1200px] mx-auto flex justify-between items-center p-5'>
        <h1 className='font-bold text-2xl'>{
          toggle ? 'Available player' : `Selected Player (${purchasedPlayers.length}/6)`
        }</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-200 rounded-l-2xl border-r-0 ${toggle && 'bg-[#E7FE29]'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-200 rounded-r-2xl border-l-0 ${toggle || 'bg-[#E7FE29]'}`}>Selected (<span>{purchasedPlayers.length}</span>)</button>
        </div>
      </div>

      {
        toggle ?
          <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
            <AvailablePlayers
              playersPromise={playersPromise}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
            ></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers
            purchasedPlayers={purchasedPlayers}
            removePlayre={removePlayre}
          ></SelectedPlayers>
      }
    </>
  )
}

export default App
