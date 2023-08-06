import React from 'react'
import Questtion from './Questtion'
import { data } from './data.js'
function Container() {
  return (
    <main className='bg-gray-50 mx-auto w-11/12 h-fit py-10 rounded-md md:w-3/4 lg:w-2/4'>
      <h1 className='text-center text-5xl font-bold'>Question</h1>
      <section>
        {data.map((item)=>{
           return <Questtion question={item.question} answer={item.answer} key={item.id}/>
        })}
      </section>
    </main>
  )
}

export default Container
