import React from 'react'

function Work() {
    
    var images = [
        {url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "50%", left : "50%", isActive: false},
        {url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "56%", left : "44%", isActive: false},
        {url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "45%", left : "56%", isActive: false},
        {url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "60%", left : "453%", isActive: false},
        {url: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "43%", left : "40%", isActive: false},
        {url: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "65%", left : "55%", isActive: false},
    ]
  return (
    <div className='w-full'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[20vw] font-sans leading-none select-none font-medium tracking-tight'>Work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem,index) => (elem.isActive && (<img src={elem.url} alt="" className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{top: elem.top, left: elem.left}} />)))}
            </div>
        </div>
    </div>
  )
}

export default Work