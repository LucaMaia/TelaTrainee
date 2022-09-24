// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'

// Componentes
import AccordionComponent from '../../components/Accordion'
import NavbarComponent from '../../components/Navbar'
import Footer from '../../components/Footer'

import MiniCard from "../../components/MiniCard";


//SubPages
import PrimeiroEscopo from '../../subpages/primeiro'
import EtapasProcessoSeletivo from '../../subpages/etapasProcesso'
import Beneficios from '../../subpages/beneficios'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarComponent/>
        <PrimeiroEscopo/>

      <h4 className={styles.processo_seletivo}>Quais foram as etapas do processo seletivo?</h4>
        {/* <EtapasProcessoSeletivo/> */}
      <h4 className={styles.beneficios}>Beneficíos</h4>
        {/* <Beneficios/> */}
      <h4 className={styles.titulo_accordion}>Perguntas Frequentes</h4>
        <AccordionComponent/>
      <Footer/>
    </div>
  )
}
