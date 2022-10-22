import React from "react";
import { Link } from 'react-router-dom';
import '../Style/two.css'; 

export default function TwoColumns(){
    return(
        <div className="row">
        <div className="column1" style={{backgroundColor:'#dc6226'}}>
          <h2 style={{color:'white',marginLeft:300,textAlign:'left'}}>Fresh Investment
          <br/>
           Solutions!</h2>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:300,textAlign:'left'}}></i><Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}> Boutique Discretionary Investment </Link>
          <br/>
            <Link to="" style={{marginLeft:330, color:'white',textDecoration:'none'}}> Management & Stockbroking Services</Link>
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:300,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Third Party Fund Investments</Link>
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:300,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Bespoke Capital Protected Investments</Link>
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:300,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Invest in Africa Rising</Link>
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:300,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Investment course</Link>
          <br/> 
          <br/>
          <button style={{marginLeft:300,backgroundColor:'transparent',borderBlockColor:'white',borderColor:'white',color:'white'}}>Learn more</button>
          
        </div>
        <div className="column2"style={{backgroundColor:'#434f53'}} >
        <h2 style={{color:'white',marginLeft:70,textAlign:'left'}}>Learning to Save 
          <br/>
          Money</h2>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:70,textAlign:'left'}}></i><Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}> Investment course </Link>
          
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:70,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Marketing course</Link>
          <br/>
          <i class="fa fa-cog" aria-hidden="true" style={{color:'lightgrey',marginLeft:70,marginTop:10}}></i>   <Link  className="texthover" to=""  style={{color:'white',textDecoration:'none', marginLeft:10}}>Management course</Link>
          <br/>
          
            <p style={{marginLeft:70,color:'white'}}>During the existence of the company, a lot
                <br/>
                 of companies and starters have become 
                 <br/>
                 our customers. Most of them are now 
                 <br/>
                 prosperous and popular in the business
                 
                 <br/> sphere.</p>
        
          <button style={{marginLeft:70,backgroundColor:'transparent',borderBlockColor:'white',borderColor:'white',color:'white'}}>Learn more</button>
          
        </div>
      </div>
    )  
    
}