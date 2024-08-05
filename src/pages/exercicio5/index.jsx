import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício5() {

    const [Nome, setNome ]= useState("Nome do livro")
    const [paginas, setPaginas] = useState(0)
    const [tempo, setTempo] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let soma = ((tempo / 60) * paginas) / 60
        setClick(soma)
        return setClick
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
                        <p>Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do t empo em segundos de leitura por página.</p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <div className='divisao'>
                                <h2>Nome do livro</h2>
                                <input type="text" value={Nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div className='divisao'>
                                <h2>Total de Páginas</h2>
                                <input type="text" value={paginas} onChange={e => setPaginas(e.target.value)} />
                            </div>
                            <div className='divisao'>
                                <h2>Tempo em segundos</h2>
                                <input type="text" value={tempo} onChange={e => setTempo(e.target.value)} />
                            </div>
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>Você lerá {Nome} em {Click.toFixed(2)} horas</p>
                </div>
            </main>
        </div>
    )
}