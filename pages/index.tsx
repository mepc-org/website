import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
    <div className="dark:bg-black dark:text-white antialiased">
      <Head>
        <meta charSet="utf-8" />
        <title>Home - Movimiento Estudiantil por la Psicología Científica (MEPC)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Somos una organización independiente de estudiantes y graduades, que tenemos como fin promover el pensamiento crítico y la psicología científica, formarnos entre los integrantes en temas afines y reclamar por una formación actualizada, plural y científica." />
        <meta name="keywords" content="psicología científica movimiento mepc" /> 
      </Head>
      <Nav />
      <Hero />
    </div>
    </>
  )
}
