import React from "react";
import styles from '../../styles/Home.module.css'

// Componentes
import NavbarComponent from '../../components/Navbar'
import Footer from '../../components/Footer'

//SubPages
import PrimeiroEscopo from '../../subpages/primeiro'
import EtapasProcessoSeletivo from '../../subpages/etapasProcesso'
import Beneficios from '../../subpages/beneficios'
import PerguntasFrequentes from "../../subpages/perguntasFrequentes";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarComponent/>
        <PrimeiroEscopo/>

        <EtapasProcessoSeletivo/>

        {/* <EtapasProcessoSeletivo
          title="Incrições"
          description="Etapas de Lançamento"
          number="1"
          date="De 17 até 26 de agosto"
          text="As inscrições serão realizadas online através de links disponibilizados aqui neste mesmo site."
        /> */}


        <Beneficios/>
        <PerguntasFrequentes/>
      <Footer/>
    </div>
  )
}
