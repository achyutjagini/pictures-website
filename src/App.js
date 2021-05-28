import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Home';  
import About from './About'  
import Contact from './Contact'
class App extends React.Component
{
render()
{
return(
<Router>  
    
    <div>  
       
      <Route path="/" component={Home} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  

  </Router>
);
}
}


export default App;
