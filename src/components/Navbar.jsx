import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center'>
      <img className='w-1/16' src="https://i.pinimg.com/736x/14/b9/0b/14b90bb343e8fe8b928dece37985a832.jpg" alt="" />
      <div className='links flex gap-14 ml-20'>
        {['Home', 'Work', 'Culture'].map((elem,index) => <a className='text-sm flex items-center gap-1' href='#'>
          {index === 1 && (<span style={{boxShadow:"0 0 0.45rem #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>)}
          {elem}</a>)}
      </div>
    </div>
  )
}

export default Navbar