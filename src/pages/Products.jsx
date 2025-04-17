import React from 'react'
import getProducts from '../service/getProducts'
import ReusebleCard from '../components/ReusebleCard'
import { Helmet } from 'react-helmet'

const Products = () => {
  const data = getProducts()

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
      <section className='containers !py-[100px] flex flex-wrap items-center gap-[20px]'>{data?.map(item => <ReusebleCard extraClass={"!p-[0]"} key={item.id} imgClass={"!rounded-t-[20px]"} item={item} isBtn={false} />)}</section>
    </>
  )
}

export default Products