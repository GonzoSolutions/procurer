//
// App.tsx
//

import * as React from 'react'

//
//

import * as Styles from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';

import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';

//
//

import Logo from '/logo.svg'
import './App.css'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { calories, fat, carbs, protein, name };
}

const rows = [
  createData('alpha', 159, 6.0, 24, 4.0),
  createData('beta', 237, 9.0, 37, 4.3),
];

const pages = [
  'abc', 'xyz', 
]

const theme = Styles.createTheme(
  {
    palette: {
      mode: 'dark', 
      primary: {
        main: '#090909', 
      }, 
    }, 
  }
)

function App() {
  const [count, setCount] = React.useState(0)

  const handleCloseNavMenu = () => {
    //setAnchorElNav(null);
  };

  return (
    <>
      <Styles.ThemeProvider theme={theme}>

        <AppBar position='static' color='primary'>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography variant="h6" component="a" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} noWrap>
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

      </Styles.ThemeProvider>

      <br />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left"> Name </TableCell>
              <TableCell align="right"> Quantity </TableCell>
              <TableCell align="right"> Time </TableCell>
              <TableCell align="right"> Price </TableCell>
              <TableCell align="right"> Vendor </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) =>
                ( 
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableRow>
                )
              )
            }
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <img src={Logo} className="logo" alt="Vite logo" />
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
