import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardsIcon() {
  return (
    <div >

  
    <div className='row' style={{ marginLeft: 200, marginRight: 100,backgroundColor:'transparent' }}>
   
  
      <div className='col-md-3' style={{backgroundColor:'transparent' }}>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png" style={{ height: 90, width: 90, marginLeft: 110, marginTop: 20 }} />
          <Card.Body>
            <Card.Title style={{textAlign:'center',marginLeft:30 }}>NEW YORK 9870 ST VINCENT GLASGOW</Card.Title>
          
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'><Card style={{ width: '18rem', border: 'none' }}>
        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png" style={{  height: 90, width: 100, marginLeft:140, marginTop: 20  }} />
        <Card.Body>
          <Card.Title style={{ marginLeft:100}}>CONTACT@DEMOLINK.ORG</Card.Title>
          
        </Card.Body>
      </Card>
      </div>

      <div className='col-md-5'>
        <Card style={{ width: '20rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-phone.png" style={{  height: 90, width: 90, marginLeft: 240, marginTop: 20  }} />
          <Card.Body style={{paddingLeft:10}}>
            <Card.Title style={{ marginLeft:130 }}>CALL US:+1 800 603 6035</Card.Title>
            
          </Card.Body>
        </Card>
      </div>

     
      </div>


    </div>

  );
}