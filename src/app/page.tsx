"use client"
import Image from 'next/image'
import styles from './page.module.css'
import ImageForm from '../assets/Link/Camada-12.jpg'
import ImageHome from '../assets/Link/home.png'
import ImageLink from '../assets/Link/link.png'
import { useRouter } from "next/navigation";
import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export default function App() {
  const router = useRouter();

  const routerForm = () => {
    console.log("link encontrado")
    router.push('/form')
  }
  const routerHome = () => {
    router.push('/home')
  }
  const routerLink = () => {
    router.push('https://www.linkedin.com/in/henrique-lauxen-seefeld-27009426b/')
  }
  const routerGit= () => {
    router.push('https://github.com/HLauxen')
  }
  
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.name}>Henrique Lauxen</h1>
        <p className={styles.title}>Links Úteis:</p>
        <div className={styles.links}>
          
          <button onClick={routerHome} className={styles.link}><Image alt='imagem' src={ImageHome} width={300} height={125}/></button>
          <button  onClick={routerForm} className={styles.buttonDisabled}>Contratar</button>
          <div className={styles.link__logo}>
            <button  onClick={routerLink} className={styles.logo}><LinkedinLogo size={28} /></button>
            <button  onClick={routerGit} className={styles.logo}><GithubLogo  size={28} /></button>
          </div>
          
  
        </div>
      </div>
    </main>
  )
}

