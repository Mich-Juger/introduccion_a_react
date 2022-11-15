import './App.css';
import Header from './Header.jsx';
import Portada from './Portada.jsx';
import Card from './Card.jsx';




// Para pasar una propiedad a un Componente se llama con el mismo nombre de la propiedad props
// Componente = Header
// Propiedad = texto_titulo

function App() {
  return (
    
    <main>
      <Header texto_titulo= "Galeria de Imágenes con React"/>

      <Portada titulo_imagen= "" src_imagen_portada= "images/Portada2.jpg"/>


      <section className="galeria">
        <Card titulo_imagen= "Templo Bahá’í" src_imagen= "images/templobahai.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Lago Chungará" src_imagen= "images/lago-chungara.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Parque Nacional Conguillo" src_imagen= "images/parque-nacional-conguillio.jpg" descripcion_imagen= ""/>
        
        <Card titulo_imagen= "Torres del Paine" src_imagen= "images/torres-del-paine.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Antofagasta" src_imagen= "images/antofagasta.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Cuevas de Mármol" src_imagen= "images/cuevas-de-marmol.jpg" descripcion_imagen= ""/>       


        <Card titulo_imagen= "Pucón" src_imagen= "images/pucon.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Valdivia" src_imagen= "images/valdivia.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Playa Arica" src_imagen= "images/playa-el-laucho-arica.jpg" descripcion_imagen= ""/>
        
        <Card titulo_imagen= "Termas Colina" src_imagen= "images/thermas-cajon-del-maipo.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Desierto Florido" src_imagen= "images/desierto-florido.jpg" descripcion_imagen= ""/>
        <Card titulo_imagen= "Cochamo" src_imagen= "images/cochamo.jpg" descripcion_imagen= ""/>
      </section>
      
    </main>

  );
}

export default App;
