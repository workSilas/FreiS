import './index.scss';
import { Link } from 'react-router-dom'

export default function Sobre() {
    return (
        <div className='pagina-sobre'>
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
                <h2>Sobre</h2>
                <div className='text'>
                    <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. 
                    <br/><br />
                    Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br />
                    Estamos ansiosos para ver seu progresso e sucesso!</p>
                    <img src="/assets/images/Frei-Logo.png" alt="" />
                </div>
            </main>
        </div>
    )
}