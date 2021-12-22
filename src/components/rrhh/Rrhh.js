import React from 'react'
import { Box } from '@mui/system'
import { Container, Divider, Typography } from '@mui/material'
import Curriculum from '../curriculum/Curriculum'

const Rrhh = ({ fondo, colorfondo, titulo }) => {
    return (
        <div>
            <>
                <a name="rrhh" />
                <Container maxWidth="100%"
                    id="rrhh"
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
                                    <b>¿QUERÉS SER PARTE DE NUESTRO EQUIPO?</b>
                                    <p />
                                    EIV SOFTWARE S.R.L. ES UNA EMPRESA DE DESARROLLO DE SOFTWARE ORIENTADA A ENTIDADES FINANCIERAS.
                                    EN EIV CREEMOS EN EL TRABAJO EN EQUIPO, COMO MOTOR DE MAYOR MOTIVACION, COMPROMISO, NUEVAS IDEAS Y MEJORES RESULTADOS.
                                    ES POR ESO QUE CONSIDERAMOS SUMARTE A NUESTRO EQUIPO.<br />
                                    <p><b>CONOCIMIENTOS DE: </b></p>
                                    <b>BASES DE DATOS: </b>SQL, MONGODB, ELASTIC SEARCH.<br />
                                    <b>LENGUAJES: </b>JAVA, ANGULAR, JAVASCRIPT, VB6.<br />
                                    <b>FRAMEWORK: </b>SPRING, ANGULAR, REACT.<br />

                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                    <Curriculum
                        titulo="DEJANOS TUS DATOS" />
                    <Divider />
                </Container>
            </>
        </div>
    )
}

export default Rrhh
