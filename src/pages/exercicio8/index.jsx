import { click } from '@testing-library/user-event/dist/click';
import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício8() {

    const [temperatura, setTemperatura] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let situacao = ''
        if(temperatura >= 41){
            situacao = 'Hipertermia'
        }
        else if(temperatura >= 39.6 && temperatura < 41){
            situacao = 'Febre Alta'
        }   
        else if(temperatura >= 37.6 && temperatura < 39.6){
            situacao = 'Febre'
        }
        else if(temperatura >= 36 && temperatura < 37.6){
            situacao = 'Normal'
        }
        else if(temperatura < 36){
            situacao = 'Hipotermia'
        }   
        else{
            situacao = 'Inválido'
        }
        setClick(situacao)
        return setClick
    }

    return (
        <div className='pagina-ex8'>
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
                    <h2>Exercício 08 - Converter Kg/gramas</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript a partir da temperatura, <b>avalie a situação</b> da pessoa conforme a tabela ao lado. Ao final, apresente a classificação.</p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Sua temperatura</h2>
                            <input type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)} />
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>A situação da sua temperatura é {Click}.</p>
                </div>
            </main>
        </div>
    )
}