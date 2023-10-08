import './home.css';
import search_icon from '../../images/search_icon.png';
import region_icon from '../../images/region_icon.png';
import login_icon from '../../images/login_icon.png';
import saleforce_icon from '../../images/saleforce_icon.svg';
import zingant_icon from '../../images/zingant_icon.png';
import left_img from '../../images/left_panel.png';
import right_img from '../../images/right_panel.png';

import { Navbar, NavDropdown, Nav, Container, Row, Col, Button,Form } from 'react-bootstrap'; 

import RateSelectBox from './page-sections/rate_select_box';


function Home(props){
    return (
        <div>
            <div className='Navigation-Menu-Font Navigation-Menu-Background-Color Navigation-Menu-No-Padding Navigation-Menu-Margin' >
                <Row className='Match-BootStrap-Blue-Nav-BGColor'> 
                    <Col className='Navigation-Menu-No-Padding '>
                        <Navbar collapseOnSelect expand="sm">
                            <Navbar.Brand href="/">
                                <div className='Navigation-Menu-Div-Img-Logo'>
                                    <img className='Navigation-Menu-Img' src={zingant_icon} />
                                </div>
                        </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="me-auto Navigation-Menu-Text-Padding">
                                    <Nav.Link href="#home">Products</Nav.Link>
                                    <Nav.Link href="#link">Industries</Nav.Link>
                                    <Nav.Link href="#link">Customers</Nav.Link>
                                    <Nav.Link href="#link">Learning</Nav.Link>
                                    <Nav.Link href="#link">Support</Nav.Link>
                                    <Nav.Link href="#link">Company</Nav.Link>
                                                                  
                                </Nav>                           
                            </Navbar.Collapse>                                                                  
                        </Navbar>        
                    </Col>

                    <Col className='Navigation-Menu-No-Padding'>
                        <Navbar  collapseOnSelect expand="sm" expand={true}> 
                        <Navbar.Toggle aria-controls="two" />                          
                        <Navbar.Collapse id="two">
                            <Nav  className="ms-auto ">
                                    <Nav.Link href="#home">
                                        <span className='Navigation-Menu-Text-Underline'>Contact Us</span>
                                        <br />
                                        <span>1800-999-9999</span>
                                    </Nav.Link>
                                    <Nav.Link href="#home" className='Navigation-Menu-Text-Margin-Center'>
                                        <div className='Navigation-Menu-Div-Img'>
                                            <img className='Navigation-Menu-Img' src={search_icon} />
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link href="#home" className='Navigation-Menu-Text-Margin-Center'>
                                        <div className='Navigation-Menu-Div-Img'>
                                            <img className='Navigation-Menu-Img' src={region_icon} />
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link href="#home" className='Navigation-Menu-Text-Margin-Center'> 
                                        <div style={{display:'flex'}}>
                                        <div className='Navigation-Menu-Div-Img'>
                                            <img className='Navigation-Menu-Img' src={login_icon} /> 
                                        </div>
                                        <div style={{paddingLeft:'10px'}}>
                                              Login
                                        </div>
                                        </div>
                                    </Nav.Link>                                        
                            </Nav> 
                        </Navbar.Collapse>
                        <Button variant="success" className='Nav-Menu-Button-Position'>Try For Free</Button>                                             
                        </Navbar>                      
                     </Col> 
                </Row>
            </div>  
           
            <div className='Navigation-Menu-Horizontal-Bar'>
            </div>
            
            
            <Container className="mt-5">
                <Row>
                    <Col>
                        <div className='Home-Body-Left-Font' style={{paddingLeft:'80px'}}>
                        “Deliver a Seamless Shipper Experience” 
                        </div>
                        <br />
                        <div className='Home-Body-Div-Img-Logo'>
                            <img className='Home-Body-Img' src={left_img} /> 
                        </div>

                        <br />

                        <div style={{paddingLeft:'80px'}}>
                            <p>Watch this demo to see how ZingAnt transforms the entire shipping journey, from start to finish, through:</p>
                            <ul>
                                <li>Targeted marketing</li>
                                <li>Service, pricing, and quoting</li>
                                <li>Systems of record integration</li>
                                <li>Carrier, cargo, and route optimization</li>
                                <li>Business analytics</li>
                          </ul>
                        </div>
                    </Col>

                    <Col>
                       

                        <div>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                           <span  className='Home-Rate-Box-Text-Important'>From</span> 
                                           <span className='Home-Rate-Box-Text-Not-Important'> (USA only)</span> 
                                        </Form.Label>
                                        <Form.Control placeholder="Zipcode" />
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <span  className='Home-Rate-Box-Text-Important'>To</span> 
                                            <span className='Home-Rate-Box-Text-Not-Important'> (USA only)</span> 
                                        </Form.Label>
                                        <Form.Control placeholder="Zipcode" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            <span  className='Home-Rate-Box-Text-Important'>Type of Packaging</span>
                                        </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <RateSelectBox />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>
                                            <span  className='Home-Rate-Box-Text-Important'>Dimensions</span>
                                            <span className='Home-Rate-Box-Text-Not-Important'> (inches)</span>                                                                         
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <span  className='Home-Rate-Box-Text-Important'>Weight</span>
                                        </Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>    
                                        <div style={{display:'flex'}}>  
                                            <div>                                                                   
                                                <Form.Control placeholder="Length" /> 
                                            </div>
                                            <div>
                                                <Form.Control placeholder="Width" />   
                                            </div>
                                            <div>
                                                <Form.Control placeholder="Height" />      
                                            </div> 
                                        </div>                                
                                    </Col>
                                    <Col>    
                                        <div style={{display:'flex'}}>  
                                            <div>                                                                   
                                                <Form.Control placeholder="Pounds" />  
                                            </div>
                                            
                                            <div  style={{padding:'5px'}}>
                                                +
                                            </div>
                                            <div>
                                                <Form.Control placeholder="Ounces" /> 
                                            </div>  
                                        </div>                  
                                    </Col>                                                                                         
                                </Row>
                                <Row>
                                    <Col>
                                             <br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <Button style={{width:'100%'}} variant="primary" type='submit'>See Shipping Rate</Button> 
                                    </Col>
                                </Row>
                            </Form>
                        </div>

                    
                     {/*
                        <div className='Home-Body-Div-Img-Right'>
                            <img className='Home-Body-Img' src={right_img} /> 
                        </div>
                     */}
                    </Col>
                </Row>

                <Row>
                     <Col>
                        <RateSelectBox />
                     </Col>
                </Row>
            </Container>

           
    </div>
    );
}

export default Home;