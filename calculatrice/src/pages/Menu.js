import React from 'react';
import Calc from './Calc';

const Menu = () => {
    return (
        <div>
            <p>Bienvenue sur la calculatrice</p>

            <a href='/calculatrice'><button>Calculatrice</button></a>
            <a href='/historique'><button>Historique</button></a>
        </div>
    );
};

export default Menu;