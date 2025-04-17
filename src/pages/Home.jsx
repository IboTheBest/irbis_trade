import React from 'react'
import { Header, Hero, Options, Section5, Section6, Section7, Take } from '../modules/HomePage'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Эксперты в области таможенной очистки грузов с 2014 года"
        />
        <meta property="og:title" content='ЧП "IRBIS US"' />
        <meta
          property="og:description"
          content="Эксперты в области таможенной очистки грузов с 2014 года"
        />
        <meta
          property="og:image"
          content="https://storage.cloupard.uz/irbisuz/websiteassets/irbis_logo.svg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/" />

        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <Hero />
      <Options />
      <Take />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  )
}

export default Home