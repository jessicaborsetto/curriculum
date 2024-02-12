import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contacts() {
    return (
        <div className="contacts" id="contacts">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={8}>
                        <p>I'm looking for opportunities that allow me to challenge myself, learn from professionals, and grow in an environment that believes in a constantly evolving future. I'm excited to contribute and learn together, building a digital future that meets the challenges of ongoing evolution.
                        If you share my passion for professional growth and want to be part of a team that embraces change, feel free to contact me.</p>
                    </Col>
                    <Col  xs={12} md={6} lg={4}>
                        <h4 className='title'>Contact me</h4>
                         <hr />
                        <div className='socials'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='m-0'>Mail: borsettojessica02@gmail.com</p>

                        </div>

                        <div className='socials'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <p className='m-0'>
                                <a href="https://www.linkedin.com/in/jessica-borsetto-front-end-developer/">Linkedin: Jessica Borsetto</a>
                            </p>
                        </div>

                        <div className='socials'>
                            <FontAwesomeIcon icon={faGithub} />
                            <p className='m-0'><a href="https://github.com/jessicaborsetto">Github: jessicaborsetto</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts


