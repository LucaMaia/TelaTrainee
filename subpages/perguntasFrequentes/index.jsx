import React from "react";
import AccordionComponent from '../../components/Accordion';

import styles from "../../styles/Accordion.module.css";


export default function PerguntasFrequentes() {
  return (
      <div>
         <h4 className={styles.titulo_accordion}>
          Perguntas Frequentes :
        </h4>
      <AccordionComponent
        title="Idade Importa ?"
        text="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos."
      />

      <AccordionComponent
        title="Preciso estar na Faculdade ?"
        text="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos."
      />

      <AccordionComponent
        title="Mas.... e o ingles ?"
        text="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos."
      />

     <AccordionComponent
        title="Preciso morar em Brasília ?"
        text="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos."
      />
      </div>
  );
}

