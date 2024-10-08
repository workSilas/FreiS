import './index.scss';
import { useState } from 'react'
import Titulo from '../../components/titulo';
import Enunciado from '../../components/enunciado';
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
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 12 - Comparador de pessoas"
                    color="#FFCE37"
                />
                <Enunciado
                    text="Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas."
                />
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
        </div>
    )
}