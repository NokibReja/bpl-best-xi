import React, { useState } from 'react';

const PlayerCard = ({ player, userImg, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers}) => {

    const [isSelected, setIsSelecte] = useState(false)
    const handleSelected = (playerData) => {
        // console.log(playerData)
        const playerPrice = parseInt(playerData.price.split('$').join(''))
        if (availableBalance<playerPrice) {
            alert('Not enough coins!!')
            return
        }
        setIsSelecte(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayers([...purchasedPlayers, playerData])
    }
    return (
        <div className="card bg-white bg-base-100 shadow-sm p-3">
            <figure>
                <img
                    className='w-full h-[300px] object-cover'
                    src={player.player_img}
                    alt="player" />
            </figure>
            <div className="mt-4 bg-white text-black ">
                <div className='flex'>
                    <img className='w-7' src={userImg} alt="" />
                    <h2 className="card-title ml-2">{player.player_name}</h2>
                </div>
                <div className='flex justify-between items-center border-b-2 border-gray-200 pb-2'>
                    <div className='flex'>
                        <img className='w-5 h-5 mr-2 mt-1' src="https://i.ibb.co.com/BKsv728B/Group.png" alt="" />
                        <p>Banglasedh</p>
                    </div>
                    <button className='btn'>{player.playing_role}</button>
                </div>
                <div className='flex justify-between my-3 font-bold'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='font-bold'>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>
                <div className="card-actions mt-3 flex justify-between items-center">
                    <p className="font-bold">Price: {player.price}</p>
                    <button
                        disabled={isSelected}
                        onClick={() => handleSelected(player)}
                        className="btn bg-green-600">
                        {isSelected ? 'Selected' : 'choose player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;



