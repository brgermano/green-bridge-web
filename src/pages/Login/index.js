import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        root: {
          marginTop: '20%',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          marginTop: '35px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: '35px',
        }
      }
    }
  },
});

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" component="h2">
              Bem-vindo
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField 
              id="outlined-email"
              label="CPF/CNPJ"
              variant="outlined"
              fullWidth
              value={user}
              onChange={(e) => { setUser(e.target.value) }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField 
              id="outlined-password" 
              label="Senha" 
              variant="outlined" 
              type="password"
              fullWidth 
              value={pass}
              onChange={(e) => { setPass(e.target.value) }}
            />
          </Grid>

          <Grid item xs={12}>
            <Link to='home'>
              <Button variant="contained" color="success" fullWidth>
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login;