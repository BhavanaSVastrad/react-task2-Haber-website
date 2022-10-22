import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ThreeCards() {
  return (
    <div style={{backgroundColor:'lightgrey'}}>

 
    <div className='row' style={{ marginLeft: 100, marginRight: 100, marginTop: 50 }}>
      <h2 style={{marginLeft:280,marginBottom:20}}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h2>
      <h5 style={{textAlign:'center'}}>If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</h5>
      <br/>
    <br/>

      <div className='col-md-3' style={{marginLeft:50,marginTop:20}}>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" style={{ height: 150, width: 250, marginLeft: 20, marginTop: 20 }} />
          <Card.Body>
            <Card.Title style={{textAlign:'center',color:'#dc6226' }}>Assets of investors</Card.Title>
            <Card.Text style={{ marginLeft: 20 ,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif',fontSize:14,textAlign:'center'}}>
            All operations of the company's projects are maintained at the expense of assets of investors.
            </Card.Text>
       
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:110}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
      
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3' style={{marginLeft:100,marginTop:20}}>
        <Card style={{ width: '18rem', border: 'none' }}>
        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice2.jpg" style={{  height: 150, width: 250, marginLeft: 20, marginTop: 20  }} />
        <Card.Body>
          <Card.Title style={{ textAlign:'center',color:'#dc6226'}}>Directions</Card.Title>
          <Card.Text style={{ marginLeft: 20,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif',fontSize:14,textAlign:'center' }}>
          The team works in two directions: portfolio investment, where is the lowest risk, and investments in startups
          </Card.Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:110}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
        </Card.Body>
      </Card>
      </div>

      <div className='col-md-3'style={{marginLeft:100,marginTop:20}}>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice3.jpg" style={{  height: 150, width: 250, marginLeft: 20, marginTop: 20  }} />
          <Card.Body>
            <Card.Title style={{ textAlign:'center',color:'#dc6226' }}>Support</Card.Title>
            <Card.Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 14,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif' }}>
            If you have a question, you can always call our hotline, and operators will be happy to help you!
            </Card.Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:110}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
          </Card.Body>
        </Card>
      </div>

     



    </div>
    </div>
  );
}