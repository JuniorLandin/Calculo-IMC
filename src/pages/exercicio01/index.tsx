import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react'
import styles from './styles.module.scss'


const Function = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

     const imc = Number(peso) / (Number(altura) *  Number(altura))

    if(peso === '' || 0 || null && altura === '' || 0 || null){
      setError("Favor digite algum valor.")
      return;
    }

    if(peso === '' || 0 || null) {
      setError("Favor digite o peso")
      return;
    }

    if(altura === '' || 0 || null){
      setError("Favor digite a altura")
      return;
    }

    if(Number(peso) > 200) {
      setError("Esse valor de peso é muito alto para ser humano")
      return;
    }
    if(Number(altura) > 3){
      setError("Não existe seres humanos nessa altura. Favor digite uma altura válida")
      return
    }

    if(imc <= 18.5){
      setResultado('Abaixo do peso')
    } else if (imc > 18.5 && imc <= 24.9){
      setResultado('Peso normal')
    } else if (imc >= 25 && imc <= 29.9){
      setResultado('Acima do peso')
    } else if (imc >= 30 && imc <= 34.9){
      setResultado('Obesidade Grau 1')
    } else if (imc >= 35 && imc <= 39.9){
      setResultado('Obesidade Grau 2')
    } else if (imc > 40){
      setResultado('Obesidade Grau 3')
    }

    return;
  }

  return (
    <div className={styles.container}>
      <h1>Tabela IMC</h1>

      <div className={styles.divText}>
        <div>
          <h2>IMC</h2>
          <p>Menos do que 18,5</p>
          <p>Entre 19,5 e 24,9</p>
          <p>Entre 25 e 29,9</p>
          <p>Entre 30 e 34,9</p>
          <p>Entre 35 e 39,9</p>
          <p>Mais do que 40</p>
        </div>

        <div>
          <h2>Resultado</h2>
          <p>Abaixo do peso</p>
          <p>Peso normal</p>
          <p>Sobre peso</p>
          <p>Obesidade Grau 1</p>
          <p>Obesidade grau 2</p>
          <p>Obesidade grau 3</p>
        </div>
      </div>


      <section className={styles.content}>
        <h1 className={styles.titulo}>Calcule seu IMC</h1>
        <form onSubmit={handleSubmit} className={styles.formGrande}>
          <label>Peso:
          <input
          type='number'
          placeholder='Digite seu peso'
          value={peso}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPeso(e.target.value)}
          />
          </label>

          <label>
            Altura:
            <input 
            type='number'
            placeholder='Digite sua altura'
            value={altura}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAltura(e.target.value)}
            />
          </label>

          <input className={styles.button}
          type='submit'
          value='Calcular'
          />
        </form>
        {/*Resposta */}
        <p className={styles.neutro}> { resultado ?
          <span className={styles.certo}>{resultado}</span> :
          <span className={styles.error}>{error}</span>
        }
        </p>
      </section>
    </div>
  )
}

export default Function
