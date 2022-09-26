import React from "react";
import Image from 'next/image'
import styles from '../../styles/ProcessoSeletivo.module.css'

// Components
import CardProcessoSeletivo from "../../components/CardProcessoSeletivo";

let cardsProcessoSeletivo = [
	{"title":"Inscrições", "description":"Etapas de Lançamento", "number":"1", "date":"De 17 até 26 de agosto", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Teste de Mapeamento", "number":"2", "date":"31 de agosto", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Desafio", "description":"Presencial", "number":"3", "date":"Nos dias 01 a 03 de Setembro", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Dinâmica", "number":"4", "date":"5 de Setembro", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Painel de Gestores", "description":"Presencial", "number":"5", "date":"6 de Setembro", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Entrevista com Diretores", "description":"Presencial", "number":"6", "date":"De 9 até 12 de Setembro", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
	{"title":"Início das atividades", "number":"7", "date":"19 de Setembro", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."},
]

export default function EtapasProcessoSeletivo() {
  return (

	<>
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

				{cardsProcessoSeletivo.map((item,index) => {
                    return (
                        <div key={index} style={{padding:"10px 40px"}}>
							<CardProcessoSeletivo
								title={item.title}
								description={item.description}
								number={item.number}
								date={item.date}
								text={item.text}
							/>
                        </div>
                    )
                })}
	</>
  )
}
