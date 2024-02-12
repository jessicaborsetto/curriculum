import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiceD20, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cards from "./Cards"

function About() {

    return (
        <div className="about" id="about">
            <h4 className='title'>Get to Know me</h4>
            <Container className="d-flex justify-content-between">
                <Row>
                    <Col xs={12} sm={12} lg={12}>
                        <p>
                            I am Jessica, a young technology enthusiast with a keen interest in the world of web development. I have developed skills in HTML, CSS, and JavaScript, and I am excited to join your team as a Junior Front End Developer.


                            <div className='title hobbies'>
                                <FontAwesomeIcon icon={faGamepad} />
                                <h5>Hobbies</h5>
                                <FontAwesomeIcon icon={faDiceD20} />
                            </div>

                            In addition to my passion for technology, I engage in digital drawing, enjoy role-playing games and video games, and have a deep appreciation for reading. I believe that my combination of technical skills and creative interests can contribute significantly to your project.
                        </p>
                        <br />
                    </Col>
                </Row>
            </Container>
            <h5 className='title'><i className="bi bi-award-fill"></i> Education</h5>
            <Cards></Cards>

        </div>

    )
}

export default About