import React from 'react'
import getProducts from '../service/getProducts'
import ReusebleCard from '../components/ReusebleCard'

const Products = () => {
  const data = getProducts()
  console.log(data);
  
  
  return (
    <section className='containers !py-[100px] flex flex-wrap items-center gap-[20px]'>{data?.map(item=><ReusebleCard key={item.id} item={item} isBtn={false}/>)}</section>
  )
}

export default Products