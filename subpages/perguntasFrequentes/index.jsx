import React from "react";
import AccordionComponent from '../../components/Accordion';

import styles from "../../styles/Accordion.module.css";

let accordion = [
  { "title": "Idade Importa ?", "text": "Não, desde que você esteja no último ano da graduação ou tenha concluído o curso em até um ano antecedente"},
  { "title": "Preciso estar na Faculdade ?", "text": "Não necessariamente. Você precisa estar no último ano da graduação ou tenha concluído o curso em até um ano antecedente."},
  { "title": "Mas... e o inglês ?", "text": "Não há necessidade de proficiência em outro idioma durante as etapas do processo."},
  { "title": "Preciso morar em Brasília ?", "text": "Sim, todas as etapas do programa serão realizadas na nossa sede em Brasília-DF."},
]

export default function PerguntasFrequentes() {
  return (
      <div>
         <h4 className={styles.titulo_accordion}>
          Perguntas Frequentes :
        </h4>
                {accordion.map((item,index) => {
                    return (
                        <div key={index} style={{ width:"90%", margin:"0 auto"}}>
                            <AccordionComponent
                              title={item.title}
                              text={item.text}
                            />
                        </div>
                    )
                  })
                }
      </div>
  );
}

