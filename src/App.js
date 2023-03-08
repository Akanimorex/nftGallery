import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CardBox from './components/CardBox';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <Box className="App" sx={{display:'flex'}}>
      <CssBaseline />
      <Sidebar/>
      <Header/>
      <CardBox/>
    </Box>
  );
}

export default App;
