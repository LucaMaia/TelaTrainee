import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function AccordionComponent({title, text}) {
  return (
      <>
        <Accordion style={{width:"70%", margin:"0 auto", padding:"5px"}}>
          <Accordion.Item eventKey="0" variant="danger">
            <Accordion.Header >{title}</Accordion.Header>
            <Accordion.Body style={{backgroundColor:"white"}}>
              {text}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
  );
}

