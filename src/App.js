import logo from './logo.svg';
import offsetsvg from './assests/Vector-1580.png';
import { Button, Grid, InputLabel, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CountUp from 'react-countup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


import './App.css';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    submitColor: createColor('#1B1C31'),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <FontAwesomeIcon icon={icon({name: 'user-secret'})} />
      <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} />
      <FontAwesomeIcon icon={icon({name: 'coffee', family: 'sharp', style: 'solid'})} />
      <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> */}
      <main>
        <div className='offset-svg'>

        </div>
        <Grid container spacing={2} md={10} justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <Typography>
              Product Growth Solution in Single Platform.
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography>
              Managing business payments has never been easier
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography>
              Never at water me might. On formed merits hunted unable merely by mr whence or.
              Possession the unpleasing simplicity her uncommonly.
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <InputLabel htmlFor="component-simple">Register using email address:</InputLabel>
            <TextField id="outlined-basic" variant="standard" />
            <Button variant="contained" size="large" color='submitColor'>
              Submit
            </Button>
          </Grid>

          {/* Card interactions */}
          <Grid container spacing={2}  justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Typography>Likes</Typography>
            </Grid>

            <Grid container item xs={8}  justifyContent="center" alignItems="center">
              <Grid item xs={8}>
          
              <CountUp
                end={140948}
                separator=','
                duration={10}
                />
              </Grid>

              <Grid item xs={8}>
                
                <Typography>11.28%</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Companies section */}
          <Grid container  justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Typography>Over 32k+ software businesses growing with AR Shakir</Typography>
            </Grid>

          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
