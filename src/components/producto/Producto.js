import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Producto = ({ fondo, colorfondo, titulo, data, imagen }) => {
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
                    <div align="right">
                        <img src={imagen} alt="producto" width="100" style={{ position: 'absolute' }} />
                    </div>
                    <Typography
                        variant="h4"
                        component="div"
                        align="left"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold'
                        }} >

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
                        }} >
                        <Box>

                            {data}
                        </Box>
                    </Typography>

                </Box>

            </Box>

        </Container >
    )
}

export default Producto
