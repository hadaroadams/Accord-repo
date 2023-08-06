import React, { useState } from 'react'

function Questtion({question,answer,id}) {
    const [show,setShow] = useState(false)
  return (
    <article className='mx-10 mt-5 border border-zinc-300 p-4 rounded-lg'>
        <div className='flex justify-between mb-3'>
            <h1 className='font-bold text-xl'>{question}</h1>
            <button onClick={()=>{setShow(!show)}} className='bg-gray-400 w-6 h-6 rounded-full text-xs '>{show?<i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</button>
        </div>
        {show?<p className='text-sm'>{answer}</p>:<p></p>}
    </article>
  )
}

export default Questtion
