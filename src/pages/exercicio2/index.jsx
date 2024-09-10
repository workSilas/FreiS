import './index.scss';
import { useState } from 'react'
import Nav from '../../components/navegacao';
import Titulo from '../../components/titulo';

export default function Exercício2() {

    const [kg, setKg] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let convert = kg * 1000
        setClick(convert)
        return setClick
    }

    return (
        <div className='pagina-ex2'>
            <Nav />
                <div className='sep'>
                    <Titulo
                        titulo="Exercício 02 - Converter Kg/gramas"
                        color='#B3FF37'
                    />
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
        </div>
    )
}