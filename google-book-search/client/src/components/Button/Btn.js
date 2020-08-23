import React from "react";
// import "./style.css";
import Button from 'react-bootstrap/Button'


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
   
<Button id="deleteBtn" variant="primary" type="submit" {...props} role="button" tabIndex="0">
Delete
</Button>

  );
}



export function ViewBtn(props) {
    return (
     
  <Button id="viewBtn" variant="primary" type="submit" {...props} role="button" tabIndex="0">
  View
  </Button>
  
    );
  }
  


  export function SaveBtn(props) {
    return (
     
  <Button id="saveBtn" variant="primary" type="submit" {...props} role="button" tabIndex="0">
  Save
  </Button>
  
    );
  }
  
