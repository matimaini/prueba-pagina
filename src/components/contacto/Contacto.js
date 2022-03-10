import React, { useState } from 'react'

import { Autocomplete, Box, Container, Fab, FormControl, TextField, Typography } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation'
import './Contacto.css'
import ScrollAnimation from 'react-animate-on-scroll';
import { Form } from 'react-bootstrap';



const Productos = [
  { label: 'Portal vendedores', value:'PortalVendedores' },
  { label: 'Portal clientes', value:'PortalClientes' },
  { label: 'Administracion de tarjetas', value:'Tarjetas' },
  { label: 'Sistema financiero', value:'financiero' }
];

const Contacto = ({ fondo, colorfondo, titulo }) => {


  const handleInputChange = (event) => {
  
   setDatos({
       ...datos,
       [event.target.name] : event.target.value
   })

   console.log(datos.producto)

 }

 
 const [datos, setDatos] = useState({
   nombre: '',
   empresa: '',
   telefono:'',
   celular: '',
   domicilio: '',
   localidad: '',
   provincia: '',
   pais: '',
   email: '',
   producto: '',
   comentario:''
 })
 
 const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos... nombre ' + datos.nombre + ' empresa ' + datos.empresa + ' cel '  + datos.celular 
              + ' ' + datos.domicilio + ' local ' + datos.localidad + ' ' + datos.provincia + ' ' + datos.pais
              + ' ' + datos.email + ' ' + datos.producto + ' ' + datos.comentario)
}

const [producto, setproducto] = useState("")

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
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",

        }}  >

        <Box
          component="form" sx={{ m: 'auto', textAlign: 'center', }}>
          <ScrollAnimation
            animateIn='fadeIn'
            animateOut='fadeOut'
            duration={1}
            delay={0.5}
          >
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
                <Form onSubmit={enviarDatos}> 
                <FormControl
                 sx={{
                  textAlign: 'center', display: 'grid',
                  
                  flexWrap: 'wrap',
                  '& .MuiTextField-root': { m: 1, minWidth: '24ch', maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                  '& .MuiInputLabel-root': { fontWeight: '1rem', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                  '& .MuiAutocomplete': { m: 1, maxWidth: '50ch', /* backgroundColor: '#385E70', */ borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },


                }}
                >
                  <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="nombre" label="Nombre y apellido" sx={{ color: 'text.primary' }} />
                  <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="empresa" label="Empresa" sx={{ color: 'text.primary' }} />
                  <div>
                    <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="telefono" label="Teléfono" type='number' />
                    <TextField          variant="filled" color="secondary" onChange={handleInputChange} name="celular" label="Celular" type='number' />
                  </div>
                  <div>
                    <TextField variant="filled" color="secondary" onChange={handleInputChange} name="domicilio"  label="Domicilio" />
                    <TextField variant="filled" color="secondary" onChange={handleInputChange} name="localidad"  label="Localidad" />
                  </div>
                  <div>
                    <TextField          variant="filled" color="secondary"           onChange={handleInputChange} name="provincia"  label="Provincia" />
                    <TextField required variant="filled" color="secondary"  onChange={handleInputChange} name="pais"  label="Pais" />
                  </div>
                    <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="email"  label="Email" type='email'/>
                  <Autocomplete
                    disablePortal
                    id="Producto"
                    getOptionSelected={(option, value) => option.id === value.id}
                    onChange={setproducto} name="producto" 
                    options={Productos}
                    renderInput={(params) => <TextField {...params} label="Producto" />}
                  />
                  <TextField required variant="filled" color="secondary" onChange={handleInputChange} name="comentario"  label="Comentarios"
                    id="outlined-textarea"
                    placeholder="Placeholder"
                    multiline />

                  <Box sx={{ justifyContent: 'space-around', p: 2, display: 'block' }}>

                    <Fab variant="extended"
                      color="secondary"
                      aria-label="add"
                      elementType="submit"
                      component="span"
                      type='submit'
                      onClick={enviarDatos}
                      sx={{ m: 2 }}
                    >
                      <NavigationIcon />
                      Enviar formulario
                    </Fab>
                  </Box>
                </FormControl>
                </Form>
              </div>

            </Box>
          </ScrollAnimation>
        </Box>

      </Container>
    </>
  )
}

export default Contacto
