import Image from 'next/image'
import styles from '../styles/home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [info, setInfo] = useState(require('../data/info.json'))
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear())
  const [certificados] = useState(info.certificados)

  useEffect(() => {
    setAnoAtual(new Date().getFullYear())
  }, [])

  var idade = anoAtual - 1983

  return (
    <div className={styles.container}>
      <div className={styles.lateral}>
        <Image
          src="/profile.jpeg"
          alt="Foto de Perfil"
          width={10000}
          height={10000}
          className={styles.profileImage}
        />
        <div className={styles.backImg}>
          <h1>{info.perfil.nome}</h1>
          <div className={styles.partidoContainer}>
            <p className={styles.partido}>{info.perfil.partido}</p>
            <Image
              src="/icon.jpg"
              alt="Ícone do Partido"
              width={10000}
              height={10000}
              className={styles.sigla}
            />
          </div>
        </div>
      </div>

      <div className={styles.bio}>
        <h2>Biografia</h2>
        <ul>
          <li>{idade} anos, {info.perfil.aniversario}</li>
          <li>Cursando: {info.perfil.cursando}</li>
        </ul>
        <p>{info.perfil.desc}</p>

        <div className={styles.certificados}>
          <h2>Certificados</h2>
          <ul>
            {certificados.map((certificado, index) => (
              <li key={index}>
                <strong>{certificado.titulo}</strong> <br />
                <Image
                  src={certificado.imagem}
                  alt={certificado.titulo}
                  width={10000}
                  height={10000}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}