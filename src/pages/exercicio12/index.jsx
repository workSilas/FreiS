import { click } from '@testing-library/user-event/dist/click';
import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from '../../components/navegacao';

export default function Exercício12() {

    const [nome, setNome] = useState(0)
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState(0)
    const [Click, setClick] = useState(0)
    const [array, setArray] = useState([])

    function clicking() {

        return setClick
    }

    return (
        <div className='pagina-ex12'>
            <Nav/>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 12 - Comparador de pessoas</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implemente um programa em Javascript que leia <b>o nome, a idade, e o sexo de várias pessoas.</b></p>
                    </div>
                    <div className='divisao'>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Nome</h2>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            <h2>Idade</h2>
                            <input type="text" value={idade} onChange={e => setIdade(e.target.value)} />
                            <h2>Sexo</h2>
                            
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}