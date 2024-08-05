import { click } from '@testing-library/user-event/dist/click';
import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício2() {

    const [kg, setKg] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let convert =  kg * 1000
        setClick(convert)
        return setClick
    }

    return (
        <div className='pagina-ex2'>
            <header>
                <div>
                    <img src="/assets/images/Frei-Logo.png" alt="" />
                    <h1>React FreiS</h1>
                </div>

                <div>
                    <Link to='/Home'>Inicio</Link>
                    <Link to='/Sobre'>Sobre</Link>
                </div>
            </header>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 02 - Converter Kg/gramas</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Valor em gramas</h2>
                            <input type="text" value={kg} onChange={e => setKg(e.target.value)} />
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>Resultado: O Resultado é {Click}g</p>
                </div>
            </main>
        </div>
    )
}