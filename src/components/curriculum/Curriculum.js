
import { Box, Container, Fab, FormControl, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation'
import React from 'react'


const Curriculum = ({ fondo, colorfondo, titulo }) => {
    return (

        <>
            {/* <Container maxWidth="100%"
                id="producto"
                align="center"
                justify="center"
                direction="column"
                sx={{
                    bgcolor: colorfondo,
                    
                    verticalAlign: "center",
                    alignContent: "center",
                    backgroundImage: `url(${fondo} )`,
                    
                }}  > */}


                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch', borderTopLeftRadius:10, borderTopRightRadius:10 },
                        '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius:10, borderTopRightRadius:10 },
                        mt:5,
                        textAlign: 'center'

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
                                <TextField required variant="filled" color="secondary" label="Nombre y apellido" />
                                <TextField required variant="filled" color="secondary" label="Fecha de nacimiento" />
                                <TextField          variant="filled" color="secondary" label="Domicilio" />
                                <TextField required variant="filled" color="secondary" label="Teléfono" />
                                <TextField required variant="filled" color="secondary" label="Email" />
                                <TextField variant="filled" color="secondary" label="Comentarios"
                                    id="outlined-textarea"
                                    placeholder="Placeholder"
                                    multiline />

                                <Box sx={{ justifyContent: 'space-around', p: 2, display: 'flex' }}>
                                    <label for="boton-cv">
                                        <input type="file" id="boton-cv" style={{ display: 'none' }} />

                                        <Fab variant="extended"
                                            color="secondary"
                                            aria-label="add"
                                            elementType="file"
                                            component="span"
                                            sx={{ m: 2 }} >

                                            <AddIcon elementType='file' />
                                            Adjuntá tu CV
                                        </Fab>

                                    </label>
                                    <Fab variant="extended"
                                        color="secondary"
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
            {/* </Container> */}
        </>
    )
}

export default Curriculum
