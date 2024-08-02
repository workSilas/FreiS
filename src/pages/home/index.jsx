import './index.scss';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='pagina-home'>
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
                <h2>Escolha um treino...</h2>
                <div className='corner'>
                    <div className='square'>
                        <div className='circle' id='laranja'>

                        </div>
                        <h3>Cupom de desconto</h3>
                        <Link to='/Exercicio1'>Exercício 01</Link>
                    </div>
                    <div className='square'>
                        <div className='circle' id='verde'>

                        </div>
                        <h3>Converter Kg/gramas</h3>
                        <Link to='/Exercicio2'>Exercício 02</Link>
                    </div>
                    <div className='square'>
                        <div className='circle' id='azul'>

                        </div>
                        <h3>Valor total por quantidade</h3>
                        <Link to='/Exercicio3'>Exercício 03</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}