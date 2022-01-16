
import { Container, Fab, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import { Box } from '@mui/system'
import React from 'react'

const Busquedas = ({ fondo, colorfondo, titulo }) => {
    return (
        <Container maxWidth="100%"
            id="producto"
            align="center"
            justify="center"
            direction="column"
            sx={{
                bgcolor: colorfondo,
                minHeight: "100vh",
                verticalAlign: "center",
                alignContent: "center",
                backgroundImage: `url(${fondo} )`,
                display: "flex",

            }}  >

            <Box sx={{
                textAlign: 'left', m: 'auto', width: '70%'
            }}>
                <Box sx={{ mb: 5 }}>
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
                </Box>
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
                        <Box sx={{
                            ml: 5
                        }}>
                            <u><b>DESARROLLADORES JAVA/.NET</b></u>
                            <p />
                            <div sx={{}}>
                                FORMÁ PARTE DE UN EQUIPO DE IMPLEMENTACIÓN DE SOFTWARE<br />
                                <p><b>REQUISITOS EXCLUYENTES: </b></p>
                                <ul>
                                    <li> BACKEND JAVA O .NET DEVELOPER CON +3 AÑOS DE EXPERIENCIA</li>
                                    <li>CONOCIMIENTOS DE BASES DE DATOS RELACIONALES Y TRANSACT-SQL</li>
                                    <li>EXPERIENCIA Y/O CONOCIMIENTOS CONSUMIENDO Y DESARROLLANDO SERVICIOS REST Y/O SOAP</li>
                                    <li>BUEN MANEJO DE HERRAMIENTAS DE VERSIONADO DE CODIGO / GIT</li>
                                    <li>NIVEL DE INGLES: INTERMEDIO</li>
                                </ul>
                                <p><b>REQUISITOS DESEABLES: </b></p>
                                <ul>
                                    <li>TDD E INTEGRACION CONTINUA</li>
                                    <li>REVISION DE CÓDIGO, AJUSTE DE PERFORMANCE, CUELLOS DE BOTELLA</li>
                                    <li>PATRONES DE DISEÑO Y ARQUITECTURA, EVENT-DRIVEN ARCHITECTURE Y SOA</li>
                                    <li>EXPERIENCIA EN RUBRO DE SEGUROS</li>
                                    <li>EXPERIENCIA EN PRÁCTICAS AGILE, METODOLOGIA SCRUM</li>
                                </ul>
                                <p><b>OFRECEMOS: </b></p>
                                <ul>
                                    <li>BONO ANUAL POR CUMPLIMIENTO DE OBJETIVOS</li>
                                    <li>ACCESO A PLATAFORMA DE CAPACITACION ONLINE</li>
                                    <li>BENEFICIOS PARA TU SALUD Y BIENESTAR</li>
                                    <li>GIFT CARD CON IMPORTANTES BENEFICIOS</li>
                                    <li>FLEXIBILIDAD PARA TRABAJO EN NUESTRAS OFICINAS O TRABAJO REMOTO</li>
                                </ul>
                            </div>
                            <div align="center">
                                <Fab href="#rrhh"
                                    variant="extended"
                                    color="primary"
                                    aria-label="add"

                                >
                                    <NavigationIcon />
                                    Envianos tu CV
                                </Fab>
                            </div>
                        </Box>
                    </Typography>
                </Box>

            </Box>

        </Container >
    )
}

export default Busquedas
