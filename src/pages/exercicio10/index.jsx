import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício10() {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [Click, setClick] = useState(0)
    const [array, setArray] = useState([])

    function clicking() {
        let mensagem = ''
        let imc = peso / (altura * altura)
        if (imc >= 40) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Obseidade Grau III`
        }
        else if (imc >= 35 && imc <= 39.9) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Obseidade Grau II`
        }
        else if (imc >= 30 && imc <= 34.9) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Obesidade Grau I`
        }
        else if (imc >= 25 && imc <= 29.9) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Sobrepeso`
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Peso Normal`
        }
        else if (imc < 18.5) {
            mensagem = `Peso: ${peso}  | Altura: ${altura} | Situação: Abaixo do Peso`
        }
        else {
            mensagem = 'Inválido'
        }

        setArray([...array, mensagem])

        setClick(mensagem)
        return setClick
    }

    function apagar(pos) {
        array.splice(pos, 1)
        setArray([...array])
    }

    return (
        <div className='pagina-ex10'>
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
                    <h2>Exercício 10 - IMC</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, <b>caclcule o IMC</b> e avalie a faixa correspondente.</p>
                    </div>
                    <div className='divisao'>
                        <div className='square'>
                            <div className='exercise'>
                                <h2>Altura</h2>
                                <input type="text" value={altura} onChange={e => setAltura(e.target.value)} />
                                <h2> Peso</h2>
                                <input type="text" value={peso} onChange={e => setPeso(e.target.value)} />
                            </div>
                            <button onClick={clicking} >Executar</button>
                        </div>
                        <div className='historico'>
                            <ul>
                                {array.map(item =>
                                    <li>
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