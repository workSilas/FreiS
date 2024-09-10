import './index.scss';
import Titulo from '../../components/titulo';
import { useState } from 'react'
import Nav from '../../components/navegacao';

export default function Exercício6() {

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let media = (((Number(salario) * Number(bonus)) / 100) + Number(salario)) - Number(desconto)
        setClick(Number(media))
        return setClick
    }


    return (
        <div className='pagina-ex6'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 06 - Salário líquido"
                    color="#FF5B37"
                />
                <div className='enunciado'>
                    <p>Implementar um programa em Javascript para <b>calcular o salário líquido </b>de um funcionário, a partir de seu salário base, bônus mensal em porcentagem e do total de descontos em reais.</p>
                </div>
                <div className='square'>
                    <div className='exercise'>
                        <div className='divisao'>
                            <h2>Salário</h2>
                            <input type="text" value={salario} onChange={e => setSalario(e.target.value)} />
                        </div>
                        <div className='divisao'>
                            <h2>Bônus</h2>
                            <input type="text" value={bonus} onChange={e => setBonus(e.target.value)} />
                        </div>
                        <div className='divisao'>
                            <h2>Descontos</h2>
                            <input type="text" value={desconto} onChange={e => setDesconto(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={clicking} >Executar</button>
                </div>
                <div className='result'>
                    <p>O salário líquido total é de R${Click.toFixed(2)}.</p>
                </div>
            </div>
        </div>
    )
}