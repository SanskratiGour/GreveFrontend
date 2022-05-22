import Home from "./pages/Home";
import Admin from "./pages/Admin";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


const App =()=> {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<Home/>}> </Route>
        <Route  path ="admin" element={<Admin/>}></Route>
       
      </Routes>

    </Router>
  );

};

export default App;

