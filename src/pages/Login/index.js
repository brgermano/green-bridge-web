import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";
import getLogin from './services';

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
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function SubmitButton() {
    const navigate = useNavigate();

    const redirectToHome = () => navigate('/home');

    return (
      <Grid item xs={12}>
        <Button 
          variant="contained"
          color="success"
          fullWidth
          onClick={() => fetchLogin(redirectToHome)}
          disabled={loading}
        >
          Login
        </Button>
      </Grid>
    )
  }

  async function fetchLogin(callback) {
    setLoading(true);

    const status = await getLogin({ user, pass });

    if (status === 200) {
      console.log('login sucesso')

      callback()
    } else {
      setIsError(true);
    }

    return setLoading(false);
  }

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
            <Typography variant="h3" align="center" component="h3">
              Bem-vindo
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField 
              id="outlined-email"
              label="E-mail"
              variant="outlined"
              fullWidth
              value={user}
              error={isError}
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
              error={isError}
              onChange={(e) => { setPass(e.target.value) }}
            />
          </Grid>

          {isError && (
            <p style={ {color: 'red' }}>Email ou senha incorretos.</p>
          )}

          <SubmitButton />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login;