import React from "react";
import Image from 'next/image'
import styles from '../../styles/Primeiro.module.css'

// Components
import CardComponent from '../../components/Cards'

// SubPages
import EtapasProcessoSeletivo from '../../subpages/etapasProcesso'

let cards = [
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi SOars Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Luca Lins Maia Vieira de Oliveira", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
    { "name": "Davi Galati", "job": "Analista de banco de dados", "information": "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "},
]

export default function PrimeiroEscopo() {
  return (
    <div>
         {/* Primeira Parte - menina feliz e astronauta*/}
         <div className={styles.primeiro_bloco}>
            <div className={styles.sbx}>
              <h1>Conheça os nossos</h1>
              <h1>novos Astrounatas!</h1>
            </div>

            <div className={styles.alinhamento_1}>
                <Image
                  src="/feliz.png"
                  width={300}
                  height={400}
                />
                <Image
                  src="/2.svg"
                  width={300}
                  height={400}
                />
            </div>

            {/* Cards Candidatos*/}
            <div className={styles.alinhamento_cards_candidatos}>
                {cards.map((item,index) => {
                    return (
                        <div key={index} style={{padding:"10px 40px"}}>
                            <CardComponent
                                information={item.information}
                                name={item.name}
                                job={item.job}
                                backgroundColor={item.backgroundColor}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Segunda Parte - Notebook e foguete*/}
             <div className={styles.alinhamento_2}>
                 <Image
                  src="/rocket.svg"
                  className={styles.logo}
                  width={300}
                  height={400}
                 />

                 <div className={styles.processo_seletivo}>
                         Quais foram as etapas do processo seletivo?
                 </div>

                 <Image
                  src="/7.svg"
                  className={styles.logo} 
                  width={300} 
                  height={400}
                  />
             </div>

             {/*Etapas do Processo seletivo*/}

             <EtapasProcessoSeletivo/>
         </div>
    </div>
  )
}
