import React, { use } from 'react';
import userImg from '../../assets/user-1.png'
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const playerData = use(playersPromise)
    // console.log(playerData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] bg-white mx-auto p-5'>
            {
                playerData.map(player =>
                <PlayerCard
                userImg={userImg} player={player}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance}
                purchasedPlayers={purchasedPlayers}
                setPurchasedPlayers={setPurchasedPlayers}
                ></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;