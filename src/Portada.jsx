import './Portada.css';

const Portada = (props)  => {
    return (
        <div className="portada">
            <img alt={props.titulo_imagen} src={props.src_imagen_portada}/>
            <p> Descrubre las maravillas Chile</p>
        </div>        
    );
}

export default Portada;

