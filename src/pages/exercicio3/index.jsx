import './index.scss';
import Titulo from '../../components/titulo';
import { useState } from 'react'
import Nav from '../../components/navegacao';

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
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 03 - Valor total por quantidades"
                    color='#37FFF3'
                />
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
        </div>
    )
}