import React from "react";
import styles from '../../styles/Home.module.css'

// Componentes
import AccordionComponent from '../../components/Accordion'
import NavbarComponent from '../../components/Navbar'
import Footer from '../../components/Footer'

//SubPages
import PrimeiroEscopo from '../../subpages/primeiro'
import Beneficios from '../../subpages/beneficios'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavbarComponent/>
        <PrimeiroEscopo/>
        <Beneficios/>
        <AccordionComponent/>
      <Footer/>
    </div>
  )
}
