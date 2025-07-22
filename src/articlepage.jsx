import React from 'react';
import { posts } from './posts';
import { useParams } from 'react-router-dom';



export const ArticlePage = () => {
    const { id }= useParams();
    const data= posts.find(i => String(i.id) === id);

    if(!data)return <h2>Item Not Found</h2>;

    return(
        <div className='p-10'>
        
        <div className='w-full max-w-3xl mx-auto '>
        <img src = "/800x400.png" alt="800×400て書いてある画像" className="w-[768px]"></img></div>

        <div className='w-full max-w-3xl mx-auto p-4 m-0'>
         <div className='flex justify-between'>
             <p className='text-gray-400 text-[12.8px] list-none'>{new Date(data.createdAt).toLocaleDateString('ja-JP')}</p>
            

             <ul className='flex'>
              {data.categories.map((category,index)=> (
                <li key={index} 
                className='text-blue-600 text-[12.8px] mr-2 py-1  px-2 border border-blue-500 rounded list-none'>{category}</li>
              ))}
              </ul>

          
         </div>

                <p className='text-black text-2xl mt-2 mb-4'>{data.title}</p>
                <p className='text-black '
                  dangerouslySetInnerHTML={{ __html:data.content }}/>
        </div>
        </div>
  );

}

