import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Function from './exercicio01'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tabela IMC</title>
      </Head>
      <Function />
    </>
  )
}
