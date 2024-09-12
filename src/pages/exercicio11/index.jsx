import './index.scss';
import Titulo from '../../components/titulo';
import { useState } from 'react'
import Nav from '../../components/navegacao';

export default function Exercício11() {

    const [numero, setNumero] = useState(0)
    const [Click, setClick] = useState(0)
    const [array, setArray] = useState([])

    function clicking() {
        let mensagem = ''
        let mult = 0
        for (let cont = 0; cont <= 10; cont++) {
            mult = numero * cont
            mensagem = `${numero} x ${cont} = ${mult}`
            array.push(mensagem)
        }
        setClick(array)
        return setClick
    }

    return (
        <div className='pagina-ex11'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 11 - Tabuada"
                    color="#6533B7"
                />
                <div className='enunciado'>
                    <p>Implementar um programa em Javascript que <b>escreva no terminal</b> a tabuada de um número informado pelo usuário. A mensagem deve estaar no formato "A x B = X".</p>
                </div>
                <div className='divisao'>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Número</h2>
                            <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <div className='tabuada'>
                        <ul>
                            {array.map((item, pos) =>
                                <li key={pos}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}