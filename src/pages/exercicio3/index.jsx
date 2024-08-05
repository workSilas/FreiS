import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício3() {

    const [Valor1, setValor1] = useState(0)
    const [Valor2, setValor2] = useState(0)
    const [Valor3, setValor3] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let soma = (Valor1 * 13.5) + (Valor2 * 15) + (Valor3 * 17.5)
        setClick(soma)
        return setClick
    }

    return (
        <div className='pagina-ex3'>
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
                    <h2>Exercício 03 - Valor total por quantidade</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande</b>, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <div className='divisao'>
                                <h2>Quantidade pequeno</h2>
                                <input type="text" value={Valor1} onChange={e => setValor1(e.target.value)} />
                            </div>
                            <div className='divisao'>
                                <h2>Quantidade médio</h2>
                                <input type="text" value={Valor2} onChange={e => setValor2(e.target.value)} />
                            </div>
                            <div className='divisao'>
                                <h2>Quantidade grande</h2>
                                <input type="text" value={Valor3} onChange={e => setValor3(e.target.value)} />
                            </div>
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>Resultado: O total é R${Click.toFixed(2)}</p>
                </div>
            </main>
        </div>
    )
}