import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import  './Barra.css'


const Barra = () => {
    return (
        <>

            <Container maxWidth="false" fixed>
                <Box sx={{
                    flexGrow: 1,
                    
                }}>
                    <AppBar position="fixed">
                        <Toolbar sx={{ backgroundColor: '#FFFFFF' }}>

                            <img src="logos/eiv_color2.png" 
                            alt="logo" />
                            


                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat', color: 'black' }} align="center">
                                <Button variant="flat" color="primary" href="#home">    HOME</Button>
                                <Button variant="flat" color="primary" href="#Empresa" >EMPRESA</Button>
                                <Button variant="flat" color="primary" href="#productos">PRODUCTOS</Button>
                                <Button variant="flat" color="primary" href="#clientes">CLIENTES</Button>
                                <Button variant="flat" color="primary" href="#rrhh">    TALENTO HUMANO</Button>
                                <Button variant="flat" color="primary" href="#contacto">CONTACTO</Button>
                            </Typography>


                            <Button color="primary">Acceso clientes</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>

        </>
    )
}

export default Barra
