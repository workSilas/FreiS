import './index.scss';
import { useState } from 'react'
import Titulo from '../../components/titulo';
import Enunciado from '../../components/enunciado';
import Nav from '../../components/navegacao';

export default function Exercício7() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [Click, setClick] = useState('...')

    function clicking() {
        let a = ''
        let b = ''
        let c = ''
        if (cor1 == 'azul' || cor1 == 'amarelo' || cor1 == 'vermelho') {
            a = 'true'
        }
        else {
            a = 'false'
        }

        if (cor2 == 'azul' || cor2 == 'amarelo' || cor2 == 'vermelho') {
            b = 'true'
        }
        else {
            b = 'false'
        }

        if (a == 'true' && b == 'true') {
            c = 'true'
        }
        else {
            c = 'false'
        }
        setClick(c)
        return setClick
    }

    return (
        <div className='pagina-ex7'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 07 - Cores primárias"
                    color="#37FFAB"
                />
                <Enunciado
                    text="Implementar um programa em Javascript verificar se duas cores são primarias."
                />
                <div className='square'>
                    <div className='exercise'>
                        <h2>Primeira cor</h2>
                        <input type="text" value={cor1} onChange={e => setCor1(e.target.value)} />
                        <h2>Segunda cor</h2>
                        <input type="text" value={cor2} onChange={e => setCor2(e.target.value)} />
                    </div>
                    <button onClick={clicking} >Executar</button>
                </div>
                <p>As duas cores são primaria? {Click}</p>
            </div>
        </div>
    )
}