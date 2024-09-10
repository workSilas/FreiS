import Nav from '../../components/navegacao';
import './index.scss';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='pagina-home'>
            <Nav/>
            <main>
                <h2>Escolha um treino...</h2>
                <div className='fileiras'>
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
                        <div className='square'>
                            <div className='circle' id='vermelho'>

                            </div>
                            <h3>Tempo por Páginas</h3>
                            <Link to='/Exercicio4'>Exercício 04</Link>
                        </div>
                        <div className='square'>
                            <div className='circle' id='amarelo'>

                            </div>
                            <h3>Passou ou Não</h3>
                            <Link to='/Exercicio5'>Exercício 05</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='fileiras'>
                    <div className="corner">
                        <div className='square'>
                            <div className='circle' id='rosa'>

                            </div>
                            <h3>Salário</h3>
                            <Link to='/Exercicio6'>Exercício 06</Link>
                        </div>
                        <div className='square'>
                            <div className='circle' id='marrom'>

                            </div>
                            <h3>Cores</h3>
                            <Link to='/Exercicio7'>Exercício 07</Link>
                        </div>
                        <div className='square'>
                            <div className='circle' id='preto'>

                            </div>
                            <h3>Temperatura</h3>
                            <Link to='/Exercicio8'>Exercício 08</Link>
                        </div>
                        <div className='square'>
                            <div className='circle' id='roxo'>

                            </div>
                            <h3>Sorveteria</h3>
                            <Link to='/Exercicio9'>Exercício 09</Link>
                        </div>
                        <div className='square'>
                            <div className='circle' id='branco'>

                            </div>
                            <h3>IMC</h3>
                            <Link to='/Exercicio10'>Exercício 10</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='fileiras'>
                    <div className="corner">
                        <div className='square'>
                            <div className='circle' id='cinza'>

                            </div>
                            <h3>Tabuada</h3>
                            <Link to='/Exercicio11'>Exercício 11</Link>
                        </div>
                        <div className="corner">
                        <div className='square'>
                            <div className='circle' id='vermelho'>

                            </div>
                            <h3>Comparador de pessoas</h3>
                            <Link to='/Exercicio12'>Exercício 12</Link>
                        </div>
                    </div>
                    </div>

                </div>
                <hr />
                <div className='fileiras'>
                    <div className="corner">

                    </div>
                </div>
            </main>
        </div>
    )
}
