import Header from '../componentes-jsx/Header.jsx';
import Portada from '../componentes-jsx/Portada.jsx';
import Card from '../componentes-jsx/Card.jsx';
import Footer from '../componentes-jsx/Footer.jsx';
import companyLogo from '../img/LogoViajaporChile.png';
import Iconos from '../componentes-jsx/Iconos.jsx';
import 'bootstrap/dist/css/bootstrap.css';


// Para pasar una propiedad a un Componente se llama con el mismo nombre de la propiedad props
// Componente = Header
// Propiedad = texto_titulo

function App() {
  return (
    
    <main>
      <Header texto_titulo= "Galeria de Imágenes con React"/>

      <Portada/>

      <section className="galeria">
        <Card titulo_imagen= "Templo Bahá’í" src_imagen= "images/templobahai.jpg" descripcion_imagen= "El Templo Bahá’í es un refugio para la contemplación más profunda de la realidad espiritual y las cuestiones fundamentales de la vida, incluida la responsabilidad individual y colectiva para con el mejoramiento de la sociedad."/>
        <Card titulo_imagen= "Lago Chungará" src_imagen= "images/lago-chungara.jpg" descripcion_imagen= "El lago Chungará es considerado por la UNESCO como Patrimonio Natural de la Humanidad y Reserva de la Biosfera. Es un área protegida que ofrece un excelente lugar para la fotografía, para pasear y disfrutar de las bondades de la naturaleza."/>
        <Card titulo_imagen= "Parque Nacional Conguillo" src_imagen= "images/parque-nacional-conguillio.jpg" descripcion_imagen= "El Parque Nacional Conguillío, que en mapudungún significa establecerse en los piñones, se ubica en la Región de La Araucanía"/>
 

        <Card titulo_imagen= "Torres del Paine" src_imagen= "images/torres-del-paine.jpg" descripcion_imagen= "El Parque Nacional Torres del Paine está ubicado en la parte de Chile, sirviendo como una de las 11 áreasque protegen la región de la Patagonia, Magallanes y la parte chilena de la Antártida."/>
        <Card titulo_imagen= "Antofagasta" src_imagen= "images/antofagasta.jpg" descripcion_imagen= "El monumento natural La Portada es uno de los 15 monumentos naturales comprendidos dentro de las áreas silvestres protegidas de Chile, que se ubica a 18 km al norte de la ciudad de Antofagasta."/>
        <Card titulo_imagen= "Cuevas de Mármol" src_imagen= "images/cuevas-de-marmol.jpg" descripcion_imagen= "Las cuevas de mármol, también llamadas “Santuario de la Naturaleza Capillas de Mármol” son unas extrañas formaciones geológicas situadas cerca de la población de Puerto Río Tranquilo en la ruta austral chilena."/>       


        <Card titulo_imagen= "Pucón" src_imagen= "images/pucon.jpg" descripcion_imagen= "Ciudad y balneario de la Región de la Araucanía que cuenta con una población de 10 mil habitantes. Emplazada en las orillas del Lago Villarrica, el atractivo que debe su origen a propósitos militares durante el siglo XIX."/>
        <Card titulo_imagen= "Valdivia" src_imagen= "images/valdivia.jpg" descripcion_imagen= "Valdivia es una comuna y ciudad de la zona sur de Chile, capital de la provincia homónima y de la Región de Los Ríos. Se encuentra a 847,6 km al sur de Santiago, la capital de Chile. Está emplazada en la confluencia de los ríos Calle-Calle, Cau-cau y el río Cruces, y se encuentra a 15 km de la bahía de Corral"/>
        <Card titulo_imagen= "Playa Arica" src_imagen= "images/playa-el-laucho-arica.jpg" descripcion_imagen= "La playa El Laucho es una playa del océano Pacífico ubicada en la Región de Arica y Parinacota, Chile. Se encuentra al sur del espacio urbano de Arica y colinda con la playa del Alacrán en la península del Alacrán."/>
        

        <Card titulo_imagen= "Termas Colina" src_imagen= "images/thermas-cajon-del-maipo.jpg" descripcion_imagen= "Es un verdadero enclave de vida natural, ubicado a sólo 35 km. de Santiago, rodeado de un hermoso entorno natural.Sus aguas termales alcanzan una temperatura de 31°C, producto de su descenso a grandes profundidades de la tierra, desde donde arrastran todos sus componentes minerales"/>
        <Card titulo_imagen= "Desierto Florido" src_imagen= "images/desierto-florido.jpg" descripcion_imagen= "El desierto florido es un fenómeno que se produce en el desierto de Atacama Chile, el más árido del planeta, y consiste en la aparición de una gran diversidad de flores en aquellos años en que las precipitaciones son inusuales y superan el rango normal para el desierto"/>
        <Card titulo_imagen= "Cochamo" src_imagen= "images/cochamo.jpg" descripcion_imagen= "Cochamó es un pueblo y comuna de la zona sur de Chile perteneciente a la provincia de Llanquihue, Región de Los Lagos. Destaca por sus paisajes naturales y por ser un destino para la práctica de deporte aventura."/>

        </section>


        <footer className='footer'>
          <img alt='' src={companyLogo}/>
          <div className='iconos'>
            <Iconos />
          </div> 
          <section className='suscribetenewlester'>
            <p>Suscribete a nuestro newlester!</p>
            <Footer/>
          </section>

        </footer>
      

     </main>

  );
}

export default App;
