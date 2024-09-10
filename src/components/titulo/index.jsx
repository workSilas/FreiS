import './index.scss';
import { Link } from 'react-router-dom';

export default function Titulo(props) {
    return (
        <div className="Titulo">
            <div className='text'>
                <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                <h2>{props.titulo}</h2>
            </div>
            <div className='line' style={{backgroundColor: props.color}}></div>
        </div>
    )
}