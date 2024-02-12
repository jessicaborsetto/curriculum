import Button from 'react-bootstrap/Button';
// import curriculum from '../assets/CV_JESSICA_BORSETTO.pdf'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
    return(
        
            <div className='header' id='home'>
                <Row className='home'>
                    <Col xs={12} sm={12} lg={6} className='img img-fluid'></Col>
                    <Col xs={12} sm={12} lg={6}>
                        <h6>Hello, I'm</h6>
                        <h2>Jessica Borsetto</h2>
                        <h4 className='title'>Junior Frontend Developer</h4>
                        <Row>
                            <Col xs={12} sm={12} lg={6}>
                            <Button className="rounded-pill homeBtn1"> <a href='https://www.canva.com/design/DAE2vwm6Rl8/rr_4Ko-ekcwFsRc9Lbyd9g/view?utm_content=DAE2vwm6Rl8&utm_campaign=designshare&utm_medium=link&utm_source=editor'>Download CV</a></Button>
                            </Col>
                            <Col  xs={12} sm={12} lg={6}>
                            <Button className="rounded-pill homeBtn2"><a href='#contacts'>Contact Info</a></Button>
                            </Col>
                        </Row>
                    
                    </Col>
                </Row> 
            </div>
        
    )
}

export default Header