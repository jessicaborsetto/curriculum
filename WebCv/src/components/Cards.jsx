import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faTableColumns, faCode, faSchool, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
function Cards() {
  const frontendSkills = [
    { icon: faHtml5, label: 'HTML' },
    { icon: faCss3Alt, label: 'CSS' },
    { icon: faJs, label: 'JavaScript' },
    { icon: faBootstrap, label: 'Bootstrap' },
    { icon: faReact, label: 'React' },
    { icon: faSass, label: 'Sass' },
    { icon: faTableColumns, label: 'Responsive Design' },
    { icon:faObjectGroup, label: 'UI/UX design'}
  ];
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={6} className='my-4'>
            <Card className='card'>
              <Card.Body>
                <FontAwesomeIcon icon={faSchool} className='education' />

                <Row>
                  <Col xs={12} sm={12}>
                    <h6 className='title cardTitle'><i class="fa-solid fa-user-graduate"></i>LICEO LINGUISTICO MAJORANA CORNER<br />Graduated in 2021</h6>
                    <hr />
                    <h6 className='title'>LANGUAGE SKILLS:</h6>
                    <Card.Text className='cardText'>
                      <p>
                        ENGLISH: Intermediate B2
                        <br />
                        ITALIAN: Native
                      </p>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>

          <Col xs={12} sm={12} lg={6} className='my-4'>
            <Card className='card'>

              <Card.Body>

                <Row>
                  <Col xs={12} sm={12} >
                    <Card.Img variant="top" src="https://epicode.com/wp-content/uploads/2022/06/EPICODE-2.0-LOGO-15.png" className='epicode' />

                    <h6 className='title cardTitle'>EPICODE | DigiChamps | FRONT END DEVELOPER <br />From October 2023 to January 2024</h6>


                    <Card.Text className='cardText'>
                      <p>Intensive 500-hour course aimed at developing comprehensive skills in web design, UX/UI, programming languages, and front-end frameworks, with a focus on complex projects and teamwork.</p>
                    </Card.Text>
                  </Col>



                </Row>
              </Card.Body>


            </Card>
          </Col>


        </Row>


        <Row>
          <h5 className='title mt-4'><FontAwesomeIcon icon={faCode} /> Skills</h5>

          <div className="abilities">
        
          <Row>
              {frontendSkills.map((skill, index) => (
                <>
                  <Col xs={6} sm={6} md={3} lg={3} className='skillIcon my-4'>
                    <FontAwesomeIcon icon={skill.icon} className="icon" key={index} />
                    <p>{skill.label}</p>
                  </Col>
                </>
              ))}
       </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}


export default Cards;