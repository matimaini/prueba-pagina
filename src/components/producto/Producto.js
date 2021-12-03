import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Producto = (props) => {
    return (
        <div>

            <Box sx={{ textAlign: 'left' }}>
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

                <Box sx={{
                    textAlign: 'left',
                    borderLeft: 10,
                    borderColor: 'text.primary',
                    p: 5
                }}>
                    <Typography
                        variant="h5"
                        component="div"
                        align="center"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Montserrat',
                            textAlign: 'left',
                        }} >
                        {props.data}
                        
                    </Typography>
                    {/* <img src={props.data} alt="producto"> */}
                </Box>

            </Box>

        </div>
    )
}

export default Producto
