import React from "react";
import MiniCard from "../../components/MiniCard";
import styles from '../../styles/Beneficios.module.css'

let miniCards = [
    {"src": "/benefs/heart.svg", "label": "Cuidando de você!", "text": "Plano de Saúde", "backgroundColor":"#993399"},
    {"src": "/benefs/food.svg", "label": "Cuidando de você!", "text": "Vale Transporte" ,"backgroundColor":"#ff1493"},
    {"src": "/benefs/cap.svg", "label": "Cuidando de você!", "text": "Vale Refeição", "backgroundColor":"#00ced1"},
    {"src": "/benefs/food.svg", "label": "Cuidando de você!", "text": "Plano Odontológico", "backgroundColor":"#00ced1"},
    {"src": "/benefs/bag.svg", "label": "Cuidando de você!", "text": "Contratação CLT", "backgroundColor":"#993399"},
    {"src": "/benefs/life.svg", "label": "Cuidando de você!", "text": "+480 Horas de Trainamento", "backgroundColor":"#ff1493"},
]

export default function Beneficios() {
  return (
      <div>
          <h4 className={styles.titulo}>
              Beneficíos
          </h4>
              <div className={styles.beneficios}>
                  {miniCards.map((item,index) => {
                      return (
                          <div  key={index} style={{padding:"10px"}}>
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
      </div>

  )
}