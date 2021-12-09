import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Producto = (props) => {
    return (


        <Box sx={{ textAlign: 'left', p: '100' }}>
            <Typography
                variant="h4"
                component="div"
                align="left"
                sx={{
                    flexGrow: 1,
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold'
                }} >

                {props.titulo}


            </Typography>

            {/* <Box sx={{
                textAlign: 'left',
                borderLeft: 10,
                borderColor: 'text.primary',
                pl: 5,

            }}>
                <Typography
                    variant="body1"
                    component="div"
                    align="center"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Montserrat',
                        textAlign: 'left',
                        fontWeight: 'bold'
                    }} > */}

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

                        {props.data}
                    </Box>
                </Typography>
                {/* <img src={props.data} alt="producto"> */}
            </Box>

        </Box>


    )
}

export default Producto
