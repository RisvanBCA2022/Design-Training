import React from 'react'

const BlogHome = () => {

    const blogs=[
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'},
        {title:'Nodejs is a Runtime Enviornment',thumbnail:'https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png',body:'Nodejs is a Runtime enviornment not a framework',category:'Nodejs'}

    ]
  return (
    <div className='lg:px-14'>
        <h1 className='md:text-4xl sm:text-2xl lg:text-6xl text-center p-14'>
        <hr></hr>
        <span className='m-10 font-semibold'>
            SCRIBEWAY BLOGS
        </span>
            <hr></hr>
        </h1>
        <h3>Recent Blog Posts</h3>
        <div className='flex gap-5'>
            <div className='w-1/2 object-cover h-[50vh] rounded-sm border-2 p-4'> 
            <img src={blogs[0].thumbnail} className='object-cover h-[40vh]' />
            <p className='text-[#6941C6]'>sunday, 1 Jan 2023</p>
            <h3 className='font-semibold '>{blogs[0].title}</h3>
            </div>
            <div className='w-1/2 p-4 h-[50vh]'>
            <div className='bg-orange-400 h-1/2'>Blog2</div>
            <div className='bg-green-400 h-1/2'>Blog3</div>
            </div>
            
        
        </div>
        <div className='w-full h-20 bg-orange-300'>
        Blog4
        </div>
    </div>
  )
}

export default BlogHome