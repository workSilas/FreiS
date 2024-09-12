import './index.scss';
import { useState } from 'react'
import Titulo from '../../components/titulo';
import Enunciado from '../../components/enunciado';
import Nav from '../../components/navegacao';

export default function Exercício9() {

    const [kg, setKg] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let equa = 0
        let mensagem = ''
        if (kg <= 0) {
            mensagem = '"Peso inválido"'
            setClick(mensagem)
        }
        else if (kg >= 1000) {
            equa = (kg / 100) * 3
            setClick(equa.toFixed(2))
        }
        else if (kg < 1000) {
            equa = (kg / 100) * 3.50
            setClick(equa.toFixed(2))
        }
        return setClick
    }

    return (
        <div className='pagina-ex9'>
            <Nav />
            <div className='sep'>
                <Titulo
                    titulo="Exercício 09 - Sorveteria"
                    color="#D0D0D0"
                />
                <Enunciado
                    text="Implementar um programa em Javascript  que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$3,50 mas se o total de gramasfor a partir de 1kg, o preço das 100g diminui 50 centavos. Se o total de gramasfor menor ou igual a zero, enviar a mensagem 'Peso inválido'."
                />
                <div className='square'>
                    <div className='exercise'>
                        <h2>Valor em gramas</h2>
                        <input type="text" value={kg} onChange={e => setKg(e.target.value)} />
                    </div>
                    <button onClick={clicking} >Executar</button>
                </div>
                <p>O total a pagar é R${Click}.</p>
            </div>
        </div>
    )
}