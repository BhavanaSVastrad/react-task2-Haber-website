import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function IconsSlider() {
    return (
        <div>

            <Carousel>
                <Carousel.Item >
                   
                <div className='row' style={{height:100,marginTop:30}}>
                       
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner13.jpg"
                       alt="Image One"
                        />
                       </div>
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner4.jpg"
                       alt="Image One"
                        />
                        
                       </div>
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner5.jpg"
                       alt="Image One"
                        />
                       </div>
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner6.jpg"
                       alt="Image One"
                        />
                       </div>
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner11.jpg"
                       alt="Image One"
                        />
                       </div>
                       <div className='col-lg-2'>
                       <br/>
                       <img
                       className="d-block w-100"
                       src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner2.jpg"
                       alt="Image One"
                        />
                       </div>

                   </div>
                </Carousel.Item>
             
            </Carousel>
        </div>
    );
}
