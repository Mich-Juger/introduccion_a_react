import './Card.css';
import './Footer.jsx';


const Card = (props) => {
    return (
        <article className='card-galeria'>
            
            <div>
                <img alt= {props.titulo_imagen} src= {props.src_imagen}/>
            </div>
            
            <div>
                <h3>{props.titulo_imagen}</h3>
            </div>
            
            <div>
                <p>{props.descripcion_imagen}</p>
            </div>

            <div>
                
            </div>
        </article>
    );
}

export default Card;