import React from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

function App() {
  const [state, setState] = React.useState({
    string: ''
  });

  const reverseString = () => {};

  return (
    <>
      <Jumbotron>
        <h1>Reverse a string</h1>
        <p>
          Description: This program takes the string entered and reverses it using JavaScript.
        </p>

        <Container fluid p-3>
          <Row>
            <Col md='auto'>
              <Form onSubmit={reverseString}>
                <Form.Group controlId='formString'>
                  <Form.Label>String</Form.Label>
                  <Form.Control
                    type='text'
                    name='string'
                    value={state.string}
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
                <Button variant='secondary' type='submit'>
                  Clear
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
