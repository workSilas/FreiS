import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício5() {

    const [nota1, setNota1 ]= useState(0)
    const [nota2, setNota2 ]= useState(0)
    const [nota3, setNota3 ]= useState(0)
    const [Click, setClick] = useState(0)
    const [Click2, setClick2] = useState('indefinido')

    function clicking() {
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        setClick(Number(media))
        let res = ''
        if(Click >= 6 && Click <= 10){
            res = 'Aprovado'
        }
        else if(Click < 6 && Click >= 0){
            res = 'Repovado'
        }
        else{
            res = 'Inválido'
        }
        setClick2(res)
        return setClick, setClick2
    }


    return (
        <div className='pagina-ex5'>
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
                    <h2>Exercício 05 - Passou ou Não</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript para <b>verificar </b>se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
                    </div>
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
            </main>
        </div>
    )
}