// Con funcion Arrows = en vez de usar fuction se usa const

/*fuction Header(props) {
    return (
        <h1>{props.texto_titulo}</h1>
    );
}

export default Header;
*/

const Header = (props)  => {
    return (
        <h1 className='titulo'>{props.texto_titulo}</h1>
    );
}

export default Header;