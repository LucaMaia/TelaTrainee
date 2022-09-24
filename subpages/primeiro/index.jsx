import Image from 'next/image'
import styles from '../../styles/Primeiro.module.css'

// import ImageAvatars from '../../components/Avatar'
import CardComponent from '../../components/Cards'
import MiniCard from "../../components/MiniCard";



export default function PrimeiroEscopo() {
  return (
    <div>
         {/* Primeira Parte */}
         <div className={styles.primeiro_bloco}>
            <div className={styles.sbx}>
              <h1>Conheça os nossos</h1>
              <h1>novos Astrounatas!</h1>
            </div>

            <div style={{display:"flex", justifyContent:"space-between"}}> 
                <Image 
                  src="/feliz.png" 
                  // className={styles.logo} 
                  width={300} 
                  height={400}
                />
                <Image 
                  src="/2.svg" 
                  // className={styles.logo} 
                  width={300} 
                  height={400}
                />
            </div>

          {/* Cards */}

            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
              <div style={{padding:"8px"}}>
                <CardComponent/>
              </div>
              <div style={{padding:"8px"}}>
                <CardComponent/>
              </div>
              <div style={{padding:"8px"}}>
                <CardComponent/>
              </div>
              <div style={{padding:"8px"}}>
                <CardComponent/>
              </div>
            </div>

            {/* <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", width:"80%"}}>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>


                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
                <div style={{padding:"20px"}}>
                  <MiniCard/>
                </div>
            </div> */}

          {/* Segunda Parte */}
             <div style={{display:"flex",justifyContent:"space-between", border:"1px solid green", width:"80vw", alignItems:"center"}}> 
                <Image 
                  src="/rocket.svg" 
                  className={styles.logo} 
                  width={300} 
                  height={400}
                />

                <Image 
                  src="/2.svg" 
                  className={styles.logo} 
                  width={300} 
                  height={400}
                />
              </div>
          </div> 
    </div>
  )
}
