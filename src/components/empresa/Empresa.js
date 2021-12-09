import React from 'react'
import './Empresa.css'
import imagen from './img_contenido_redes.png'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'



const Empresa = ({ fondo, bgcolor, titulo }) => {

    return (
        <>
            <a name="Empresa" />
            <Container maxWidth="100%">
                
                <Box sx={{
                    textAlign: 'left', m: '10%', width: '70%'
                }}>

                    <Typography
                        variant="h4"
                        component="div"
                        align="left"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold'
                        }}>

                        {titulo}
                    
                    </Typography>

                    <Box sx={{
                        textAlign: 'left',
                        borderLeft: 10,
                        borderColor: 'text.primary',
                        p: 2
                    }}>
                        <Typography
                            variant="h6"
                            component="div"
                            align="left"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Montserrat'
                            }}>
                            <Box sx={{}}>
                                SOMOS UNA EMPRESA CON MAS DE 35 AÑOS BRINDANDO SERVICIOS DE SOFTWARE DE GESTION INTEGRAL
                                CON EL FIN DE SATISFACER LAS NECESIDADES INFORMATICAS CON ALTO NIVEL DE INNOVACION Y CALIDAD HACIA NUESTROS CLIENTES.
                                EIV SOFTWARE ES UNA EMPRESA QUE NACE Y SE NUTRE DE UN GRUPO DE PROFESIONALES ALTAMENTE ESPECIALIZADOS EN DISTINTAS AREAS.
                                <p />
                                DESDE EL AÑO 1982 COMIENZA LA ACTIVIDAD DE ESTE GRUPO EN LA UNIVERSIDAD NACIONAL DE ROSARIO,
                                DEDICANDONOS EN UN PRINCIPIO AL ÁREA DE LA DOCENCIA TANTO PRIVADA COMO ACADEMICA Y A LA INVESTIGACION
                                EN LAS ÁREAS DE AUTOMATIZACION INFORMATICA, COMUNICACIONES Y ORGANIZACION DE EMPRESAS.

                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>

    )
}

export default Empresa
