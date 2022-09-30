import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import styles from "../../styles/Accordion.module.css";

export default function AccordionComponent({title, text}) {
  return (
      <>
        <Accordion className={styles.alinhamento_accordion} >
          <Accordion.Item eventKey="0" style={{background:"aqua"}}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body >
              {text}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
  );
}

