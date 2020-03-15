import React from 'react';
import { Button, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

function App() {
  const [state, setState] = React.useState({
    string: ''
  });
  const [reverseStr, setReverseStr] = React.useState('');

  const reverseString = (event: any) => {
    event.preventDefault();
    let newArr = [];
    let newStr = '';
    for (let i = 0; i < state.string.length; i++) {
      newArr.push(state.string.charAt(i));
    }

    newStr = newArr.reverse().join('');
    setReverseStr(`Reversed String: ${newStr}`);
  };

  return (
    <>
      <Jumbotron>
        <h1>Reverse a string</h1>
        <p>
          Description: This program takes the string entered and reverses it
          using JavaScript.
        </p>
      </Jumbotron>

      <Container fluid p-3>
        <Row p-25>
          <Col md='auto'>
            <Form onSubmit={reverseString}>
              <Form.Group controlId='formString'>
                <Form.Label>String</Form.Label>
                <Form.Control
                  type='text'
                  name='string'
                  value={state.string}
                  onChange={(e: any) => setState({ string: e.target.value })}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>{' '}
              <Button
                variant='outline-secondary'
                type='reset'
                onClick={() => {
                  setState({
                    string: ''
                  });
                    setReverseStr('');
                }}
              >
                Clear
              </Button>
            </Form>
          </Col>
        </Row>
        <Row p-25>
          <Col md='auto'>
            <p>{reverseStr}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
