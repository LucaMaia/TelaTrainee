import React from "react";
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

/* Componentes */
import NavbarComponent from '../../components/Navbar'
import Footer from '../../components/Footer'

/* SubPages */
import PrimeiroEscopo from '../../subpages/primeiro'
import EtapasProcessoSeletivo from '../../subpages/etapasProcesso'
import Beneficios from '../../subpages/beneficios'
import PerguntasFrequentes from "../../subpages/perguntasFrequentes";

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
      <>
          <Head>
              <title>Trainee G4F</title>
              <meta name="description" content="Venha fazer parte do laboratório de inovação da G4F. O G4F Labs é a oportunidade que faltava para decolar sua carreira." />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className={styles.container}>
              <NavbarComponent/>
              <PrimeiroEscopo/>
              <EtapasProcessoSeletivo/>
              <Beneficios/>
              <PerguntasFrequentes/>
              <Footer/>
          </div>

      </>
  )
}
