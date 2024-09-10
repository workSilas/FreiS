import './index.scss';
import Titulo from '../../components/titulo';
import { useState } from 'react'
import Nav from '../../components/navegacao';

export default function Exercício4() {

    const [Nome, setNome] = useState("Nome do livro")
    const [paginas, setPaginas] = useState(0)
    const [tempo, setTempo] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let total = ((tempo / 60) * paginas) / 60
        setClick(total)
        return setClick
    }

    return (
        <div className='pagina-ex4'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 04 - Leitura de livro"
                    color="#37B7FF"
                />
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
        </div>
    )
}