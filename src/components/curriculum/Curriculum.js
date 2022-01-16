
import { Box, Container, Fab, FormControl, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation'
import React from 'react'


const Curriculum = ({ fondo, colorfondo, titulo }) => {
    return (

        <>
            <Container maxWidth="100%"
                id="producto"
                align="center"
                justify="center"
                direction="column"
                sx={{
                    bgcolor: colorfondo,
                    /* minHeight: "100vh", */
                    verticalAlign: "center",
                    alignContent: "center",
                    backgroundImage: `url(${fondo} )`,
                    minWidth: "100vw"
                }}  >


                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '50ch' },
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
                            m: '2'
                        }} >

                        {titulo}


                    </Typography>
                    <Box sx={{
                        textAlign: 'center',

                    }}>
                        <div>
                            <FormControl >
                                <TextField color="secondary" variant="standard"  label="Nombre y apellido" />
                                <TextField variant="standard" color="primary" label="Fecha de nacimiento" />
                                <TextField variant="standard" color="primary" label="Domicilio" />
                                <TextField variant="standard" color="primary" label="Teléfono" />
                                <TextField variant="standard" color="primary" label="Email" />
                                <TextField variant="standard" color="primary" label="Comentarios"
                                    id="outlined-textarea"
                                    placeholder="Placeholder"
                                    multiline />

                                <Box sx={{ justifyContent: 'space-around', p: 2, display: 'block' }}>
                                    <label for="boton-cv">
                                        <input type="file" id="boton-cv" style={{ display: 'none' }} />

                                        <Fab variant="extended"
                                            color="primary"
                                            aria-label="add"
                                            elementType="file"
                                            component="span"
                                            sx={{ m: 2 }} >

                                            <AddIcon elementType='file' />
                                            Adjuntá tu CV
                                        </Fab>

                                    </label>
                                    <Fab variant="extended"
                                        color="primary"
                                        aria-label="add"
                                        elementType="file"
                                        component="span"
                                        sx={{ m: 2 }}
                                    >
                                        <NavigationIcon />
                                        Enviar formulario
                                    </Fab>
                                </Box>
                            </FormControl>
                        </div>

                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Curriculum
