import React from 'react';

const SelectedCard = ({ player, removePlayre }) => {
    const handleRemove = ()=>{
        removePlayre(player)
    }
    return (
        <div className="flex justify-between items-center border-2 border-gray-300 p-2 mb-3 rounded-xl">
            <div className="flex gap-5 items-center">
                <img
                    className='h-[50px] w-[50px] rounded-xl object-cover'
                    src={player.player_img}
                    alt="player" />
                <div>
                    <h1 className='text-xl font-bold'>{player.player_name}</h1>
                    <p>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src="https://i.ibb.co.com/fYt839hC/Vector.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;