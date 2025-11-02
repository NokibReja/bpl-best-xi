import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayre }) => {
    console.log(purchasedPlayers)
    return (
        <div className='bg-white text-black max-w-[1200px] mx-auto p-3'>
            {
                purchasedPlayers.map(player => <SelectedCard player={player} removePlayre={removePlayre}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;

