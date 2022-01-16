import React from 'react'
import { Label } from '@mui/icons-material'
import { Box, Container, Fab, FormControl, Input, TextField, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import './Contacto.css'

/* import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'; */

/* export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#36a9df',
    },
    secondary: {
      main: '#e0dadc',
    },
    background: {
      default: '#36a9df',
      paper: '#373C46',
    },
    error: {
      main: '#ff6459',
    },
    text: {
      secondary: '#36a9df',
      primary: 'rgba(255,255,255,0.87)',
    },
  },
  typography: {
    overline: {
      fontFamily: '"Montserrat"',
    },
    button: {
      fontFamily: '"Montserrat"',
    },
    h1: {
      fontFamily: '"Montserrat"',
    },
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
};
 */

const Contacto = ({ fondo, colorfondo, titulo }) => {
    return (
        <>
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
                    display: "flex"
                }}  >

                <Box
                    component="form"
                    sx={{
                        m: 'auto',
                        '& > :not(style)': { m: 1, width: '25ch' },
                        '& .MuiTextField-root': { ml: 2, width: '40ch', color: 'white' },
                        textAlign: 'center',

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
                    <Box noValidate
                         sx={{
                        textAlign: 'center', display: 'grid',

                    }}>
                        <div>
                            <FormControl sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                                '& .MuiTextField-root': { ml: 2, width: '40ch', color: 'white' }
                            }} >
                                <TextField variant="standard" label="Nombre y apellido" sx={{color: 'text.primary'}}/>
                                <TextField variant="standard" label="Empresa" />
                                <div>
                                    <TextField variant="standard" label="Teléfono" />
                                    <TextField variant="standard" label="Celular" />
                                </div>
                                <div>
                                    <TextField variant="standard" label="Domicilio" />
                                    <TextField variant="standard" label="Provincia" />
                                    <TextField variant="standard" label="Localidad" />
                                    <TextField variant="standard" label="Pais" />
                                </div>
                                <TextField variant="standard" label="Email" />
                                <TextField variant="standard" label="Producto" />
                                <TextField variant="standard" label="Comentarios"
                                    id="outlined-textarea"
                                    placeholder="Placeholder"
                                    multiline />

                                <Box sx={{ justifyContent: 'space-around', p: 2, display: 'block' }}>

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

export default Contacto
