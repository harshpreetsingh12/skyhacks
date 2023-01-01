import './App.css';
import {Home ,Navbar, OurProjects,Team,Contact,Footer} from './component';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Services from './component/Services';

function App() {
  // const location = useLocation();
  return (
    <Router>
   <Routes>
    <Route key='Home' exact path='/' element={[<Navbar/>,<Home/>,<OurProjects/>,<Services/>,<Team diff="no"/>,<Footer/>]}/>
    <Route key='ContactUs' exact path='/ContactUs' element={[<Navbar/>,<Contact/>,<Footer/>]}/>
   </Routes>
    </Router>
  );
};

export default App;
