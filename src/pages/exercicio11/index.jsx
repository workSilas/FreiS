import { click } from '@testing-library/user-event/dist/click';
import './index.scss';
import { Link } from 'react-router-dom'
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
            <Nav/>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 11 - Tabuada</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
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
            </main>
        </div>
    )
}