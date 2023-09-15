import { Grid } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Side from './components/Side';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mng from './components/pages/Mng';
import BarChart from './components/pages/BarChart';
import Role from './components/pages/Role';
import Mypro from './components/pages/Mypro';
import Qr from './components/pages/Qr';
import  Home  from './components/Home';
import Piechart from './components/pages/Piechart';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Side />
          </Grid>
          <Grid item xs={9}>
            <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<Mng />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/role" element={<Role />} />
          <Route path="/myprod" element={<Mypro />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/pie" element={<Piechart />} />
    
          {/* Define more routes here */}
       
          </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
