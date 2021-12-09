
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/barra/Barra';
import Slider from './components/slider/Slider';
import Empresa from './components/empresa/Empresa'
import { Box } from '@mui/system';
import Producto from './components/producto/Producto';
import PortalClientes from '../src/assets/logos/PORTAL_CLIENTES.png';
import PortalVendedores from '../src/assets/logos/PORTAL_VENDEDORES.png';
import Tarjetas from '../src/assets/logos/ADM_TARJETAS.png';
import Fondo from '../src/assets/logos/img_contenido_redesb.png';
import FondoI from '../src/assets/logos/img_contenido_redesc.png';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <a name="home"></a>
      <header className="App-header">
        <Barra />
        <Container maxWidth="100%" >
          <Slider />
        </Container>
        <Container maxWidth="100%" sx={{bgcolor:'#373C46', backgroundImage: `url(${Fondo} )`}}  >

          <Empresa titulo="NUESTRA EMPRESA"
            fondo={Fondo}
            bgcolor="#373C46" />
        </Container>

        <a name="Empresa2"></a>
        <Container maxWidth="100%" sx={{ backgroundImage: `url(${FondoI} )`}}>
          <Producto
            fondo={FondoI}
            titulo="PORTAL CLIENTES"
            data="PLATAFORMA ONLINE DISEÑADA CON EL FIN DE ACOMPAÑAR Y ADMINISTRAR LOS MOVIMIENTOS DE TUS ASOCIADOS"
            imagen={PortalClientes} />
        </Container>
        <a name="contacto"></a>
        <Container maxWidth="100%" sx={{bgcolor:'#373C46' , backgroundImage: `url(${Fondo} )`}}>
          <Producto

            titulo="ADMINISTRACION DE TARJETAS"
            data="PARA SUMAR A TU COMBO DE PRODUCTOS, LA GESTION DE TARJETAS DE CREDITO. NUJESTRO SOFTWARE CUENTA CON UN MODULO COMPLETO PARA DICHA ADMINISTRACION."
            imagen={Tarjetas} />

        </Container>

        <Container maxWidth="100%" sx={{ backgroundImage: `url(${FondoI} )`}}>
          <Producto
            fondo={FondoI}
            titulo="PORTAL VENDEDORES"
            data="PLATAFORMA ONLINE DONDE PERMITIRA REALIZAR GESTION DE PRESTAMOS DESDE UNA BASE EXTERNA"
            imagen={PortalVendedores} />
        </Container>

        <a name="clientes"></a>
        <a name="rrhh"></a>


      </header>
    </div>
  );
}

/* 
<Producto
                titulo="PORTAL CLIENTES"
                data="PLATAFORMA ONLINE DISEÑADA CON EL FIN DE ACOMPAÑAR Y ADMINISTRAR LOS MOVIMIENTOS DE TUS ASOCIADOS" /> */
export default App;
