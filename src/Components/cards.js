import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Cards() {
  return (
    <div className='row' style={{ marginLeft: 100, marginRight: 100, marginTop: 50 }}>
      <h2 style={{marginLeft:350,marginBottom:20}}>OUR FOCUS IS OUR CLIENTS' SUCCESS</h2>
      <br/>
      <div className='col-md-3'>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus1.png" style={{ height: 70, width: 70, marginLeft: 110, marginTop: 20 }} />
          <Card.Body>
            <Card.Title style={{textAlign:'center' }}>PRIVATE
            <br/>
              BANKING</Card.Title>
            <Card.Text style={{ marginLeft: 20 ,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif',fontSize:14,textAlign:'center'}}>
              This is a banking service for wealthy individuals, which involves operations with client's money, preserving and increasing his state.
            </Card.Text>
            <Button style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '70px' }}>Read More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-3'><Card style={{ width: '18rem', border: 'none' }}>
        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus2.png" style={{  height: 70, width: 70, marginLeft: 110, marginTop: 20  }} />
        <Card.Body>
          <Card.Title style={{ textAlign:'center'}}>TIME SAVING
          <br/>
            TIPS</Card.Title>
          <Card.Text style={{ marginLeft: 20,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif',fontSize:14,textAlign:'center' }}>
            If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income.
          </Card.Text>
          <Button style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '70px' }}>Read More</Button>
        </Card.Body>
      </Card>
      </div>

      <div className='col-md-3'>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus3.png" style={{  height: 70, width: 70, marginLeft: 110, marginTop: 20  }} />
          <Card.Body>
            <Card.Title style={{ textAlign:'center' }}>BUDGETING <br/>TIPS</Card.Title>
            <Card.Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 14,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif' }}>
              Investment analysis and appraisal of investment projects (evaluation of ROI analysis of investment attractiveness of assets and branches)
            </Card.Text>
            <Button style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '70px' }}>Read More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className='col-md-3'>
        <Card style={{ width: '18rem', border: 'none' }}>
          <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus4.png" style={{  height: 70, width: 70, marginLeft: 110, marginTop: 20  }} />
          <Card.Body>
            <Card.Title style={{ textAlign:'center' }}>MONEY SAVING
            <br/>
              IDEAS</Card.Title>
            <Card.Text style={{ marginLeft: 20, fontSize: 14, textAlign: 'center' ,lineHeight: 1.5,fontFamily:'Archivo Narrow, sans-serif'}}>
              Business planning: drafting and elaboration of business plans and investment memorandums, technical-economic justification, financial .
            </Card.Text>
            <Button style={{ backgroundColor: 'transparent', color: 'black', marginLeft: '90px' }}> Readmore</Button>
          </Card.Body>
        </Card>
      </div>



    </div>

  );
}