import React from 'react';
import Calculette from '../components/Calculette';

const Calc = () => {
    return (
        <div>
            <p>Calculatrice</p>

            <Calculette />

            <a href='/'><button>Retour au menu</button></a>
        </div>
    );
};

export default Calc;