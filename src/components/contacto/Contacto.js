import React from 'react'

import { Autocomplete, Box, Container, Fab, FormControl, TextField, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import './Contacto.css'

const Productos = [
  { label: 'Portal vendedores', },
  { label: 'Portal clientes' },
  { label: 'Administracion de tarjetas' },
  { label: 'Sistema financiero' }
];

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
          display: "flex",

        }}  >

        <Box
          component="form" sx={{ m: 'auto', textAlign: 'center', }}>

          <Typography
            component="div"
            align="center"
            variant="h4"
            sx={{
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              mt: 2
            }} >
            {titulo}
          </Typography>

          <Box component="form"
            sx={{
              textAlign: 'center', display: 'grid',
              display: 'flex', flexWrap: 'wrap'

            }}>
            <div>
              <FormControl sx={{
                textAlign: 'center', display: 'grid',
                 flexWrap: 'wrap',
                '& .MuiTextField-root': { m: 1, minWidth: '24ch', maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiAutocomplete': { m: 1, maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                

              }}
              >
                <TextField required variant="filled" color="secondary" label="Nombre y apellido" sx={{ color: 'text.primary' }} />
                <TextField required variant="filled" color="secondary" label="Empresa" sx={{ color: 'text.primary' }} />
                <div>
                  <TextField required variant="filled" color="secondary" label="Teléfono" />
                  <TextField variant="filled" color="secondary" label="Celular" />
                </div>
                <div>
                  <TextField variant="filled" color="secondary" label="Domicilio" />
                  <TextField variant="filled" color="secondary" label="Localidad" />
                </div>
                <div>
                  <TextField variant="filled" color="secondary" label="Provincia" />
                  <TextField required variant="filled" color="secondary" label="Pais" />
                </div>
                <TextField required variant="filled" color="secondary" label="Email" />
                <Autocomplete
                  disablePortal
                  id="Producto"
                  options={Productos}
                  renderInput={(params) => <TextField {...params} label="Producto" />}
                />
                <TextField required variant="filled" color="secondary" label="Comentarios"
                  id="outlined-textarea"
                  placeholder="Placeholder"
                  multiline />

                <Box sx={{ justifyContent: 'space-around', p: 2, display: 'block' }}>

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

      </Container>
    </>
  )
}

export default Contacto
