import './index.scss';
import { Link } from 'react-router-dom';

export default function Enunciado(props) {
    return (
        <div className="Enunciado">

            <p>{props.text}</p>

        </div>
    )
}