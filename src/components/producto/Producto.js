import { Image } from '@mui/icons-material';
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Producto = ({ fondo, bgcolor, titulo, data, imagen }) => {
    return (

        <Container maxWidth="100%" id="producto"
            sx={{
                backgroundImage: `url(${fondo} )`,
                bgcolor: { bgcolor },
                width: '100%'
            }}  >

            <Box sx={{
                textAlign: 'left', m: '10%', width: '70%'
            }}>
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

        </Container>
    )
}

export default Producto
