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
        <Beneficios/>
        <PerguntasFrequentes/>
      <Footer/>
    </div>
  )
}
