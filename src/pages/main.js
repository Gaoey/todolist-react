import React, { useEffect, useState } from 'react'
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Card,
  List,
  ListGroup
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Content({ children }) {
  return (
    <Row>
      <Col>1 - 2</Col>
      <Col xs={6}>
        {children}
      </Col>
      <Col>1 - 3</Col>
    </Row>
  )
}

function InsertBox({ data, handleChange }) {
  const [text, setText] = useState("")
  return (
    <Content>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="create a todo"
          aria-label="todo"
          aria-describedby="basic-addon2"
          onChange={(e) => setText(e.target.value)}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => handleChange([...data, text])}>
            ok
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Content>
  )
}

function TodoList({ data }) {
  return (
    <Content>
      <Card>
        <ListGroup variant="flush">
          {data.map((v, i) => {
            return (
              <Link to="/detail" key={i}>
                <ListGroup.Item>{v}</ListGroup.Item>
              </Link>
            )
          })}
        </ListGroup>
      </Card>
    </Content>
  )
}

export function Main() {
  const [list, setList] = useState([])
  return (
    <div className="main-page-container">
      <Container>
        <InsertBox data={list} handleChange={setList} />
        <TodoList data={list} />
      </Container>
    </div>
  )
}

export default Main
