import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício7() {

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [Click, setClick] = useState('...')

    function clicking() {
        let a = ''
        let b = ''
        let c = ''
        if(cor1 == 'azul' || cor1 =='amarelo' || cor1 == 'vermelho'){
            a = 'true'
        }
        else{
            a = 'false'
        }

        if(cor2 == 'azul' || cor2 =='amarelo' || cor2 == 'vermelho'){
            b = 'true'
        }
        else{
            b = 'false'
        }

        if(a == 'true' && b == 'true'){
            c = 'true'
        }
        else{
            c = 'false'
        }
        setClick(c)
        return setClick
    }

    return (
        <div className='pagina-ex7'>
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
                    <h2>Exercício 07 - Cores</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript <b>verificar</b> se duas cores são primarias.</p>
                    </div>
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
            </main>
        </div>
    )
}