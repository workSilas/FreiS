import './index.scss';
import { useState } from 'react'
import Titulo from '../../components/titulo';
import Enunciado from '../../components/enunciado';
import Nav from '../../components/navegacao';

export default function Exercício5() {

    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [Click, setClick] = useState(0)
    const [Click2, setClick2] = useState('indefinido')

    function clicking() {
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        setClick(Number(media))
        let res = ''
        if (Click >= 6 && Click <= 10) {
            res = 'Aprovado'
        }
        else if (Click < 6 && Click >= 0) {
            res = 'Repovado'
        }
        else {
            res = 'Inválido'
        }
        setClick2(res)
        return setClick, setClick2
    }

    return (
        <div className='pagina-ex5'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 05 - Média de notas"
                    color="#CB37FF"
                />
                <Enunciado
                    text="Implementar um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6."
                />
                <div className='square'>
                    <div className='exercise'>
                        <div className='divisao'>
                            <h2>Primeira nota</h2>
                            <input type="text" value={nota1} onChange={e => setNota1(e.target.value)} />
                        </div>
                        <div className='divisao'>
                            <h2>Segunda nota</h2>
                            <input type="text" value={nota2} onChange={e => setNota2(e.target.value)} />
                        </div>
                        <div className='divisao'>
                            <h2>Terceira nota</h2>
                            <input type="text" value={nota3} onChange={e => setNota3(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={clicking} >Executar</button>
                </div>
                <div className='result'>
                    <p>A média final é de {Click.toFixed(1)}.</p>
                    <p>A situação é {Click2}.</p>
                </div>
            </div>
        </div>
    )
}