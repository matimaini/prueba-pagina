
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/barra/Barra';
import Slider from './components/slider/Slider';
import Empresa from './components/empresa/Empresa'
import { Box } from '@mui/system';
import Producto from './components/producto/Producto';
import Fondo from '../src/assets/logos/img_contenido_redesb.png';
import FondoI from '../src/assets/logos/img_contenido_redesc.png';


function App() {
  return (
    <div className="App">
      <a name="home"></a>
      <header className="App-header">
        <Barra />

        <Box>
          <Slider sx={{
            height: '100%',
            p: 2,
          }} />

        </Box>
        <a name="Empresa"></a>

        <Box sx={{

          bgcolor: '#373C46',
          backgroundImage: `url(${FondoI})`,
          width: '100%',
        }} >
          <Box sx={{
            m: '10%',
            P: 4,
            width: '70%',
          }}>

            <Empresa titulo="NUESTRA EMPRESA" />
          </Box>
        </Box >
        <div>
          <a name="Empresa2"></a>
          <Box sx={{

            
            backgroundImage: `url(${FondoI})`,
            width: '100%',
          }} >
            <Box sx={{
              m: '10%',
              P: 4,
              width: '70%',
            }}>
              <Producto
                titulo="PORTAL CLIENTES"
                data="PLATAFORMA ONLINE DISEÑADA CON EL FIN DE ACOMPAÑAR Y ADMINISTRAR LOS MOVIMIENTOS DE TUS ASOCIADOS" />
            </Box>
          </Box>
        
          <a name="contacto"></a>
          <Box sx={{

            bgcolor: '#373C46',
            backgroundImage: `url(${FondoI})`,
            width: '100%',
          }} >
            <Box sx={{
              m: '10%',
              P: 4,
              width: '70%',
            }}>
              <Producto
                titulo="ADMINISTRACION DE TARJETAS"
                data="PARA SUMAR A TU COMBO DE PRODUCTOS, LA GESTION DE TARJETAS DE CREDITO. NUJESTRO SOFTWARE CUENTA CON UN MODULO COMPLETO PARA DICHA ADMINISTRACION." />
            </Box>
          </Box>
        </div>


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
