
import React from 'react';

import logo from '../Assets/Picture.jpg';
export default function Location(){
    return(

        <div style={{backgroundColor:'grey',height:350}}>
            <h4 style={{color:'white'}}>HABER</h4><br/><p style={{color:'white'}}>© 2015 Privacy policy</p>

              <i class="fa fa-facebook-square fa-lg fa-fw" aria-hidden="true" style={{color:'darkorange'}}></i>
              <i class="fa fa-google-plus fa-lg fa-fw" style={{color:'darkorange'}}></i>
              <i class="fa fa-twitter-square  fa-lg fa-fw" style={{color:'darkorange'}}></i>
              <i class="fa fa-pinterest fa-lg fa-fw" style={{color:'darkorange'}}></i>
              <i class="fa fa-linkedin fa-lg fa-fw"style={{color:'darkorange'}}></i>

 <img src={logo} style={{ height: 200, width: 1400, paddingLeft: 800 }}></img>
        </div>
       
    )
}