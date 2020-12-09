import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Detail extends Component {
  render() {
    return (
      <div className="detail-page-container">
        this is detail <br />
        <Link to="/">
          <Button variant="outline-success">link to main</Button>
        </Link>
      </div>
    )
  }
}
