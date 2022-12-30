import './App.css';
import {Home ,Navbar, OurProjects,Team,Contact,Footer} from './component';
import {BrowserRouter as Router,Route, Routes, useLocation} from 'react-router-dom';

import Services from './component/Services';

function App() {
  // const location = useLocation();
  return (
    <Router>
   <Routes>
    <Route key='Home' exact path='/' element={[<Navbar/>,<Home/>,<OurProjects/>,<Services/>,<Team diff="no"/>,<Footer/>]}/>
    <Route key='Services' exact path='/Services' element={[<Navbar/>,<Services/>,<Footer/>]}/>
    <Route key='About' exact path='/About' element={[<Navbar/>,<Team diff="diff"/>,<Footer/>]}/>
    <Route key='Work' exact path='/Work' element={[<Navbar/>,<OurProjects/>,<Footer/>]}/>
    <Route key='ContactUs' exact path='/ContactUs' element={[<Navbar/>,<Contact/>,<Footer/>]}/>
   </Routes>

    </Router>
  );
};

export default App;
