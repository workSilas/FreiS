import { click } from '@testing-library/user-event/dist/click';
import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from '../../components/navegacao';

export default function Exercício9() {

    const [kg, setKg] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let equa = 0
        let mensagem = ''
        if(kg <= 0){
            mensagem = '"Peso inválido"'
            setClick(mensagem)
        }
        else if(kg >= 1000){
            equa =  (kg / 100) * 3
            setClick(equa.toFixed(2))
        }
        else if(kg < 1000){
            equa =  (kg / 100) * 3.50
            setClick(equa.toFixed(2))
        }
        return setClick
    }

    return (
        <div className='pagina-ex9'>
            <Nav/>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 09 - Sorveteria</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em Javascript  que <b>calcule o total</b> a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de <b>100g é R$3,50</b> mas se o total de gramasfor a partir de 1kg, o preço das 100g <b>diminui</b> 50 centavos. Se o total de gramasfor menor ou igual a zero, enviar a mensagem <b>"Peso inválido".</b></p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Valor em gramas</h2>
                            <input type="text" value={kg} onChange={e => setKg(e.target.value)} />
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>O total a pagar é R${Click}.</p>
                </div>
            </main>
        </div>
    )
}