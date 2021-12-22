import { Label } from '@mui/icons-material'
import { Box, Container, Fab, Input, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation'
import React from 'react'

const Curriculum = ({ fondo, colorfondo, titulo }) => {
    return (

        <>
            
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '50ch', color: 'white' },
                    textAlign: 'center', m: 'auto', width: '70%'

                }}>

                <Typography
                    component="div"
                    align="center"
                    variant="h4"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        m:'2'
                    }} >

                    {titulo}


                </Typography>
                <Box sx={{
                    textAlign: 'center',

                }}>
                    <div>
                        <TextField variant="filled" label="Nombre y apellido" />
                        <TextField variant="filled" label="Fecha de nacimiento" />
                        <TextField variant="filled" label="Domicilio" />
                        <TextField variant="filled" label="Teléfono" />
                        <TextField variant="filled" label="Email" />
                        <TextField variant="filled"
                            id="outlined-textarea"
                            label="Comentarios"
                            placeholder="Placeholder"
                            multiline
                        />
                        <div sx={{ justifyContent: 'space-around', m: '2', display:'block'}}>
                            <label for="boton-cv">
                                <input type="file" id="boton-cv" style={{ display: 'none' }} />

                                <Fab variant="extended"
                                    color="primary"
                                    aria-label="add"
                                    elementType="file"
                                    component="span"
                                >
                                    <AddIcon elementType='file' />
                                    Adjuntá tu CV
                                </Fab>

                            </label>
                            <Fab variant="extended"
                                color="primary"
                                aria-label="add"
                                elementType="file"
                                component="span"
                            >
                                <NavigationIcon />
                                Enviar formulario
                            </Fab>
                        </div>

                    </div>

                </Box>
            </Box>
            
        </>
    )
}

export default Curriculum
