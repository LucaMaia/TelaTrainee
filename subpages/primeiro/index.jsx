import React from "react";
import Image from 'next/image'
import styles from '../../styles/Primeiro.module.css'

// Components
import CardComponent from '../../components/Cards'

// SubPages
// import EtapasProcessoSeletivo from '../../subpages/etapasProcesso'

let cards = [
    { "name": "Pedro Henrique Martins Teixeira", "job": "Analista de requisistos", "information": "Um processo sensacional, todo carinho que a G4F deu desde o inicío do projeto, além da liberdade para que todos os selecionados pudessem apresentar suas qualidades durante o  processo seletivo, tudo foi muito muito bem planejado e excecutado. Quero retribuir toda expectativa que a G4F depositou nos novos profissionais do projeto Trainee da melhor forma. ", "src": "/PedroTeixeira.svg"},
    { "name": "Eduardo borges", "job": "Analista de requisitos", "information": "Participei do processo seletivo do programa trainee da G4F, no qual a dinâmica me surpreendeu. Foi uma experiência muito boa por juntar 5 pessoas que nunca se viram na vida para desenvolver  a solução de um problema específico em 3 dias. Meu grupo da dinâmica deu muito certo, e conseguimos entregar nossa ideia. Hoje posso me desenvolver dentro de um ambiente real e tenho maior oportunidade de crescimento profissional  graças ao projeto.",  "src": "/EduardoBorges.svg"},
    { "name": "Sarkis Paulo Junior", "job": "Desenvolvimento", "information": "Desde o início do processo seletivo ficou bem claro para nós, que se tratava de um projeto grandioso,  e isso se provou por conta das dinâmicas utilizadas e o tratamento ímpar  que tivemos durante todo o processo seletivo. Minha expectativa para o programa, são as melhores possíveis. É uma oportunidade única e estou feliz em fazer parte do time.",  "src": "/SakisPauloJunior.svg"},
    { "name": "Fernando Lucas Alves Vidal", "job": "Desenvolvimento", "information": "O processo seletivo de trainee da G4F foi marcante por ser diferente dos demais processos de seleção e entrevista.  Através dele,  foi possível que empresa pudesse ter uma noção de como é o posicionamento profissional de cada candidato perante à simulações de como seria o processo de desenvolvimento de sistemas, visando principalmente o trabalho em equipe. " ,  "src": "/FernandoVidal.svg"},
    { "name": "Leônidas Gomes Borges", "job": "Infraestrutura", "information": "Uma excelente experiência todo o processo de seleção. Um desafio que proporcionou um bom trabalho em equipe e raciocínio lógico de cada área aplicada. Uma forma de idealizar o que poderia ser aplicado numa situação real, como, quais equipamentos e ferramentas mais apropriadas a serem utilizadas e que tipo de equipamentos estavam disponíveis naquele momento." ,  "src": "/LeonidasBorges.svg"},
    { "name": "Vitor  Barros Santana", "job": "Infraestrutura", "information": "Só tenho a agradecer pela oportunidade de ter participado deste processo, soubemos que não seria fácil, mas fico feliz em ter conseguido dar meu melhor nas etapas e mostrar a empresa o profissional que sou. Fico muito feliz em poder agregar e representar a G4F e espero que se prolongue bastante, é tudo como um sonho se tornando realidade.",  "src": "/VitorSantana.svg"},
    { "name": "Davi Siqueira Correa Galati", "job": "Analista de banco de dados", "information": "Além de dinâmico foi desafiador realizar um processo seletivo que não analisasse somente os requisitos técnicos. Tenho expectativa que esse programa de trainee promovido pela G4F irá colaborar tanto para o desenvolvimento pessoal quanto para o profissional dos aprovados. Espero que essa nossa nova equipe consiga realizar com excelência todos os desafios e projetos,  e superar as expectativas da G4F." , "src": "/DaviGalati.svg"},
    { "name": "Jonatas Martins Santos", "job": "Analista de banco de dados", "information": "Participar de um processo seletivo tão organizado e desafiador com certeza foi algo que jamais esquecerei. Ficou nítido o empenho do time envolvido, da empresa, e com certeza refletiu positivamente nas equipes envolvidas.", "src": "/JonatasSantos.svg"},
]

export default function PrimeiroEscopo() {
  return (
    <div>
         {/* Primeira Parte - menina feliz e astronauta*/}
         <div className={styles.primeiro_bloco}>
            <div className={styles.sbx}>
              <h1>Conheça os nossos</h1>
              <h1>novos Astronautas!</h1>
            </div>

            <div className={styles.alinhamento_1}>
                <Image
                  src="/feliz.png"
                  width={300}
                  height={400}
                />

                <div style={{position:"relative"}}> 
                  <div style={{
                      position:"absolute", 
                      alignItems:"center", 
                      // border:"1px solid red"
                    }}>
                  <Image
                      src="/linhas.svg"
                      width={600}
                      height={400}
                    />
                  </div>
                 
                  <Image
                    src="/2.svg"
                    width={600}
                    height={400}
                  />
                </div>
            </div>

              <div className={styles.astronautas_aprovados}>
                  Astronautas Aprovados
              </div>

              <div style={{position:"relative"}}> 
                      <div className={styles.alinhamento_imagem_oculos}>
                      <Image
                        src="/oculos.svg"
                        width={150}
                        height={150}
                      />
                    </div>

                    <div className={styles.alinhamento_imagem_fone}>
                    <Image
                        src="/3.svg"
                        width={150}
                        height={150}
                      />
                  </div>

                  <div className={styles.alinhamento_imagem_pendrive}>
                    <Image
                        src="/Pendrive.svg"
                        width={150}
                        height={150}
                      />
                  </div>
                </div>

                

            {/* Cards Candidatos*/}
            <div className={styles.alinhamento_cards_candidatos}>
                {cards.map((item,index) => {
                    return (
                        <div key={index} style={{padding:"10px 40px", margin:"20px"}}>
                            <CardComponent
                                information={item.information}
                                name={item.name}
                                job={item.job}
                                backgroundColor={item.backgroundColor}
                                src={item.src}
                            />
                        </div>
                    )
                })}
            </div>
         </div>
    </div>
  )
}
