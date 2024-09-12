import './index.scss';
import { useState } from 'react'
import Titulo from '../../components/titulo';
import Enunciado from '../../components/enunciado';
import Nav from '../../components/navegacao';

export default function Exercício8() {

    const [temperatura, setTemperatura] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let situacao = ''
        if (temperatura >= 41) {
            situacao = 'Hipertermia'
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            situacao = 'Febre Alta'
        }
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            situacao = 'Febre'
        }
        else if (temperatura >= 36 && temperatura < 37.6) {
            situacao = 'Normal'
        }
        else if (temperatura < 36) {
            situacao = 'Hipotermia'
        }
        else {
            situacao = 'Inválido'
        }
        setClick(situacao)
        return setClick
    }

    return (
        <div className='pagina-ex8'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 08 - Temperatura"
                    color="#151515"
                />
                <Enunciado
                    text="Implementar um programa em Javascript a partir da temperatura, avalie a situação da pessoa conforme a tabela ao lado. Ao final, apresente a classificação."
                />
                <div className='square'>
                    <div className='exercise'>
                        <h2>Sua temperatura</h2>
                        <input type="text" value={temperatura} onChange={e => setTemperatura(e.target.value)} />
                    </div>
                    <button onClick={clicking} >Executar</button>
                </div>
                <p>A situação da sua temperatura é {Click}.</p>
            </div>

        </div>
    )
}