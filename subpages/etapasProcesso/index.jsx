import React from "react";
import Image from 'next/image'
import styles from '../../styles/ProcessoSeletivo.module.css'

// Components
import CardProcessoSeletivo from "../../components/CardProcessoSeletivo";

let cardsProcessoSeletivo = [
	{"title":"Inscrições", "description":"Etapas de Lançamento", "number":"1", "date":"De 17 até 26 de agosto", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site.", "image":"/Foguete.svg"},
	{"title":"Teste de Mapeamento", "number":"2", "date":"31 de agosto", "text":"Qual o seu perfil? Será avaliada a aderência, raciocínio lógico e conhecimentos específicos dos inscritos."},
	{"title":"Desafio", "description":"Presencial", "number":"3", "date":"Nos dias 01 a 03 de Setembro", "text":"è hora de resolver problemas! O desafio proposto será capaz de avaliar a capacidade de cada candidato de estruturar e resolver problemas."},
	{"title":"Dinâmica", "number":"4", "date":"5 de Setembro", "text":"Trabalho em Equipe! O desafio proposto será capaz de avaliar a capacidade de cada candidato de estruturar e resolver problemas."},
	{"title":"Painel de Gestores", "description":"Presencial", "number":"5", "date":"6 de Setembro", "text":"Gestão e inovação! Agora é o momento de cada um falar com detalhes de como pensou e trabalhou na solução do desafio."},
	{"title":"Entrevista com Diretores", "description":"Presencial", "number":"6", "date":"De 9 até 12 de Setembro", "text":"A diretoria quer te conhecer! Na reta final do nosso processo seletivo os nossos executivos querem saber um pouco mais sobre você."},
	{"title":"Início das atividades", "number":"7", "date":"19 de Setembro", "text":"Parabéns! Você oficialmente se tornou um astronauta do universo G4F Labs."},
]

export default function EtapasProcessoSeletivo() {
  return (

	<>
		<div className={styles.alinhamento_2}>
            <Image
                src="/Foguete.svg"
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


        <div style={{position:"relative"}}> 
                  <div className={styles.alinhamento_imagem_oculos}>
                       <Image
                            src="/oculos.svg"
                            width={250}
                            height={150}
                        />
                  </div>

                  <div className={styles.alinhamento_imagem_laptop}>
                       <Image
                            src="/7.svg"
                            width={250}
                            height={150}
                        />
                  </div>

                  <div className={styles.alinhamento_imagem_error}>
                       <Image
                            src="/error.svg"
                            width={150}
                            height={150}
                        />
                  </div>
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
                              image={item.image}
                            />
                        </div>
                    )
                })}
	</>
  )
}
