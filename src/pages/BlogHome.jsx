import React from 'react'

const BlogHome = () => {

    const blogs=[
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'}

    ]
  return (
    <div>
        <h1 className='md:text-4xl sm:text-2xl lg:text-6xl text-center p-14'>
        <hr></hr>
        <span className='m-10 font-semibold'>
            SCRIBEWAY BLOGS
        </span>
            <hr></hr>
        </h1>
        <div className='flex'>
            <div className='bg-red-400 h-20 w-1/2'> Blog1</div>
            <div className='w-1/2'>
            <div className='bg-orange-400 h-10'>Blog2</div>
            <div className='bg-green-400 h-10'>Blog3</div>
            </div>
            
        
        </div>
        <div className='w-full h-20 bg-orange-300'>
        Blog4
        </div>
    </div>
  )
}

export default BlogHome