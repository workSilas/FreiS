import Nav from '../../components/navegacao';
import './index.scss';
import { Link } from 'react-router-dom'
import Cards from '../../components/cards';

export default function Home() {
    return (
        <div className='pagina-home'>
            <Nav />
            <main>
                <h2>Escolha um treino...</h2>
                <div className='corner'>
                    <Cards
                        color="#FFCE37"
                        title="Cupom de desconto"
                        link="/Exercicio1"
                        exercicio="Exercício 01"
                    />
                    <Cards
                        color="#B3FF37"
                        title="Converter Kg/gramas"
                        link="/Exercicio2"
                        exercicio="Exercício 02"
                    />

                    <Cards
                        color="#37FFF3"
                        title="Valor total por quantidade"
                        link="/Exercicio3"
                        exercicio="Exercício 03"
                    />
                    <Cards
                        color="#37B7FF"
                        title="Leitura de livro"
                        link="/Exercicio4"
                        exercicio="Exercício 04"
                    />
                    <Cards
                        color="#CB37FF"
                        title="Média de notas"
                        link="/Exercicio5"
                        exercicio="Exercício 05"
                    />
                    <Cards
                        color="#FF5B37"
                        title="Salário líquido"
                        link="/Exercicio6"
                        exercicio="Exercício 06"
                    />
                    <Cards
                        color="#37FFAB"
                        title="Cores primárias"
                        link="/Exercicio7"
                        exercicio="Exercício 07"
                    />
                    <Cards
                        color="#151515"
                        title="Temperatura"
                        link="/Exercicio8"
                        exercicio="Exercício 08"
                    />
                    <Cards
                        color="#D0D0D0"
                        title="Sorveteria"
                        link="/Exercicio9"
                        exercicio="Exercício 09"
                    />
                    <Cards
                        color="#B75333"
                        title="Calculo de IMC com histórico"
                        link="/Exercicio10"
                        exercicio="Exercício 10"
                    />
                    <Cards
                        color="#6533B7"
                        title="Tabuada"
                        link="/Exercicio11"
                        exercicio="Exercício 11"
                    />
                    <Cards
                        color="#FFCE37"
                        title="Comparador de pessoas"
                        link="/Exercicio12"
                        exercicio="Exercício 12"
                    />
                </div>
            </main>
        </div>
    )
}
