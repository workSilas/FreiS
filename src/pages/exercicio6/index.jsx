import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício6() {

    const [salario, setSalario ]= useState(0)
    const [bonus, setBonus ]= useState(0)
    const [desconto, setDesconto ]= useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let media = (((Number(salario) * Number(bonus)) / 100) + Number(salario)) - Number(desconto)
        setClick(Number(media))
        return setClick
    }


    return (
        <div className='pagina-ex6'>
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
                    <h2>Exercício 06 - Salário</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
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
            </main>
        </div>
    )
}