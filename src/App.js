import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import ProjectPage from './Pages/ProjectPage/ProjectPage';


function App() {
  
  return (
    <BrowserRouter>
      <div id='main'>
      <Navbar/>
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path="/frontend" render={() => <ProjectPage projectType="frontend" />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
   
  );
}

export default App;
