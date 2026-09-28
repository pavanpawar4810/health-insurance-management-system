
import './App.css'
import { Typography } from "@mui/material";
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  
  return (
     <MainLayout>
      <Dashboard/>
    </MainLayout>
  );
}

export default App;
