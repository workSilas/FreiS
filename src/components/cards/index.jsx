import './index.scss';
import { Link } from 'react-router-dom'


export default function Cards(props) {
    return (
        <div className="Cards">
            <div className='square'>
                <div className='circle' style={{backgroundColor: props.color}}>
                </div>
                <h3>{props.title}</h3>
                <Link to={props.link}>{props.exercicio}</Link>
            </div>
        </div>
    )
}   

/*
    color=""
    title=""
    link=""
    exercicio=""
*/