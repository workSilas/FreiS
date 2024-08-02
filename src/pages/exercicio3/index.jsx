import './index.scss';
import { Link } from 'react-router-dom'

export default function Exercício3() {
    return ( 
        <div className='pagina-ex3'>
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
        </div>
    )    
}