import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import Homepage from './components/Homes/Homepage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5e14',
    },
    secondary: {
      main: '#F0C444',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App
