import React from "react";
import Image from 'next/image'
import styles from '../../styles/ProcessoSeletivo.module.css'

/* Components*/
import CardProcessoSeletivo from "../../components/CardProcessoSeletivo";

let cardsProcessoSeletivo = [
	{"title":"Inscrições", "description":"Etapas de Lançamento", "number":"1", "date":"De 17 até 26 de agosto", "text":"As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site.", "image":"/retangulo3.svg"},
	{"title":"Teste de Mapeamento", "number":"2", "date":"31 de agosto", "text":"Qual o seu perfil? Será avaliada a aderência, raciocínio lógico e conhecimentos específicos dos inscritos.", "image":"/retangulo3.svg"},
	{"title":"Desafio", "description":"Presencial", "number":"3", "date":"Nos dias 01 a 03 de Setembro", "text":"è hora de resolver problemas! O desafio proposto será capaz de avaliar a capacidade de cada candidato de estruturar e resolver problemas.", "image":"/retangulo3.svg"},
	{"title":"Dinâmica", "number":"4", "date":"5 de Setembro", "text":"Trabalho em Equipe! O desafio proposto será capaz de avaliar a capacidade de cada candidato de estruturar e resolver problemas.", "image":"/retangulo3.svg"},
	{"title":"Painel de Gestores", "description":"Presencial", "number":"5", "date":"6 de Setembro", "text":"Gestão e inovação! Agora é o momento de cada um falar com detalhes de como pensou e trabalhou na solução do desafio.", "image":"/retangulo3.svg"},
	{"title":"Entrevista com Diretores", "description":"Presencial", "number":"6", "date":"De 9 até 12 de Setembro", "text":"A diretoria quer te conhecer! Na reta final do nosso processo seletivo os nossos executivos querem saber um pouco mais sobre você.", "image":"/retangulo3.svg"},
	{"title":"Início das atividades", "number":"7", "date":"19 de Setembro", "text":"Parabéns! Você oficialmente se tornou um astronauta do universo G4F Labs."},
]

export default function EtapasProcessoSeletivo() {
  return (
	<>
		<div className={styles.alinhamento_processoseletivo}>
            <div className={styles.logo}>
                <Image
                    src="/Foguete.svg"
                    width={300}
                    height={700}
                />
            </div>

                 <div className={styles.titulo_processo_seletivo} id="processo_seletivo">
                     <p>Quais foram as etapas</p>
                     <p>do processo seletivo?</p>
                 </div>

            <div className={styles.logo}>
                <Image
                    src="/2.svg"
                    width={400}
                    height={1000}
                />
            </div>
        </div>

        <div style={{position:"relative"}}> 
                  <div className={styles.alinhamento_imagem_oculos}>
                       <Image
                            src="/oculos.png"
                            width={250}
                            height={150}
                        />
                  </div>

                  <div className={styles.alinhamento_imagem_laptop}>
                       <Image
                            src="/7.svg"
                            width={250}
                            height={250}
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
                        <div key={index} style={{width:"90%", margin:"0 auto"}}>
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
