import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          G4F Soluções Corporativas{' '}
          <span style={{paddingLeft:"10px"}}>
            <Image src="/labslogo.svg" alt="Vercel Logo" width={50} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
