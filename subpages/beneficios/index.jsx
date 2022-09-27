import React from "react";
import Image from 'next/image'
import MiniCard from "../../components/MiniCard";
import styles from '../../styles/Beneficios.module.css'

let miniCards = [
    {"src": "/benefs/heart.svg", "label": "Cuidando de você!", "text": "Plano de Saúde", "backgroundColor":"#993399"},
    {"src": "/benefs/food.svg", "label": "Cuidando de você!", "text": "Vale Transporte" ,"backgroundColor":"#ff1493"},
    {"src": "/benefs/cap.svg", "label": "Cuidando de você!", "text": "Vale Refeição", "backgroundColor":"#00ced1"},
    {"src": "/benefs/food.svg", "label": "Cuidando de você!", "text": "Plano Odontológico", "backgroundColor":"#00ced1"},
    {"src": "/benefs/bag.svg", "label": "Cuidando de você!", "text": "Contratação CLT", "backgroundColor":"#993399"},
    {"src": "/benefs/life.svg", "label": "Cuidando de você!", "text": "+480 Horas de Treinamento", "backgroundColor":"#ff1493"},
]

export default function Beneficios() {
  return (
      <>

             
          <h4 className={styles.titulo}>
              Beneficíos
          </h4>

          <div style={{position:"relative"}}> 
                  <div className={styles.alinhamento_imagem_oculos}>
                       <Image
                            src="/oculos.svg"
                            width={250}
                            height={150}
                        />
                  </div>

                  <div className={styles.alinhamento_imagem_pendrive}>
                       <Image
                            src="/Pendrive.svg"
                            width={250}
                            height={150}
                        />
                  </div>
        </div>


              <div className={styles.beneficios}>
                  {miniCards.map((item,index) => {
                      return (
                          <div  key={index} style={{padding:"40px"}}>
                              <MiniCard
                                  src={item.src}
                                  label={item.label}
                                  text={item.text}
                                  backgroundColor={item.backgroundColor}
                              />
                          </div>
                      )
                  })}
              </div>


      </>

  )
}