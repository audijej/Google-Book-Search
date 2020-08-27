import React, { useState, useEffect } from "react";
import { Button, Toast } from 'react-bootstrap';



function SaveToast() {

  const [show, setShow] = useState(false);

  return (
      <div className="container">
        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Google Book Club</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>This book has been saved to your list</Toast.Body>
        </Toast>

        <Button onClick={() => setShow(true)}>Click to Show Toast</Button>

      </div>
  )
}

export default SaveToast