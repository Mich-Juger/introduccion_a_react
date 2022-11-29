import '../componentes-css/Card.css';


const Card = (props) => {
    return (
        <article className='card-galeria'>
            
            <div >
                <img alt= {props.titulo_imagen} src= {props.src_imagen}/>
            </div>
            
            <div className='tituloImagen'>
                <h3>{props.titulo_imagen}</h3>
            </div>
            
            <div className='tamanoDescripcion'>
                <p>{props.descripcion_imagen}</p>
            </div>

            <div>
            </div>
        </article>
    );
}

export default Card;