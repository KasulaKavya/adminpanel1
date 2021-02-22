import React from 'react';

//react-router-dom package
import {BrowserRouter, Route} from 'react-router-dom';

//COMPONENTS
import Userorders from './Userorders.js';
import Nav from './Nav.js';
import Userview from './Userview.js';
import Productpanel from './Productpanel.js';
import Productpanelaxios from './Productpanelaxios.js';

const Routings=()=> {
    return (<>
           <BrowserRouter>

           <Nav/>
          


           <Route exact path="/" component={Userorders}/>
           <Route exact path="/userorders" component={Userorders}/>
           <Route path="/userorders/:idno" component={Userview}/>

           <Route path="/productpanel" component={Productpanel}/>
           <Route path="/productpanelaxios" component={Productpanelaxios}/>
           

           


          
           
           
           
           </BrowserRouter>
    
    
    
    </>)
     
        
    
}
export default Routings;
