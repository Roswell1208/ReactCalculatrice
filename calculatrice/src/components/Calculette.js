import React from 'react';

import '../styles/Calculette.css';

const Calculette = () => {

    const [calcul, setCalcul] = React.useState("");

    const [result, setResult] = React.useState(0);

    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    <p className='calcul'>{calcul}</p>
                    <p className='result'>{result}</p>
                </div>

                <div className='card-body'>
                    <div className='grid'>
                        <button className='btn9' onClick={() => setCalcul(calcul + '9')}>9</button>
                        <button className='btn8' onClick={() => setCalcul(calcul + '8')}>8</button>
                        <button className='btn7' onClick={() => setCalcul(calcul + '7')}>7</button>
                        <button className='btn6' onClick={() => setCalcul(calcul + '6')}>6</button>
                        <button className='btn5' onClick={() => setCalcul(calcul + '5')}>5</button>
                        <button className='btn4' onClick={() => setCalcul(calcul + '4')}>4</button>
                        <button className='btn3' onClick={() => setCalcul(calcul + '3')}>3</button>
                        <button className='btn2' onClick={() => setCalcul(calcul + '2')}>2</button>
                        <button className='btn1' onClick={() => setCalcul(calcul + '1')}>1</button>
                        <button className='btn0' onClick={() => setCalcul(calcul + '0')}>0</button>

                        <button className='btnPlus' onClick={() => setCalcul(calcul + '+')}>+</button>
                        <button className='btn-' onClick={() => setCalcul(calcul + '-')}>-</button>
                        <button className='btnX' onClick={() => setCalcul(calcul + '*')}>X</button>
                        <button className='btnDiv' onClick={() => setCalcul(calcul + '/')}>/</button>
                        
                        <button className='btnDot' onClick={() => setCalcul(calcul + '.')}>.</button>
                        <button className='btnEg' onClick={() => setResult(eval(calcul))}>=</button>
                        

                        <button className='btnC' onClick={() => setCalcul("") + setResult(0)}>C</button>
                        <button className='btnDEL' onClick={() => setCalcul(calcul.slice(0, -1))}>DEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculette;