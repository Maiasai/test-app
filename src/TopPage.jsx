import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticlePage } from './articlepage';



// HTML文字列 → <br>テキストだけ抽出（タグを除去）
const stripHtml = (html) => {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || '';
};


export const TopPage = () => {

  
  //APIから記事データを取得してjsonに変換→postsに渡してる
    const  [ posts, setPosts ]  = useState([]);

    useEffect(() => {
        const fetcher = async() => {
        const resp = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const data = await resp.json()

        setPosts(data.posts)
      }
      fetcher()
    },[])

    

  return(
    <>
    <div className='px-4 my-10 max-w-3xl mx-auto'>
      
      {posts.map((data) => (
        <Link key={data.id}
          to={`/posts/${data.id}`}
 
          className='text-black mb-8 p-4 border border-gray-300 block'>
           <div className='flex justify-between'>
                  <li className='text-gray-400 text-[12.8px] list-none'>{new Date(data.createdAt).toLocaleDateString('ja-JP')}</li>
            
              <ul className='flex'>
                {data.categories && data.categories.length > 0 && (
                  <li className='text-blue-600 text-[12.8px] mr-2 py-1  px-2 border border-blue-500 rounded list-none'>{data.categories[0]}</li>)}

                {data.categories && data.categories.length > 1 && (
                  <li className='text-blue-600 text-[12.8px] mr-2 py-1  px-2  border border-blue-500 rounded list-none'>{data.categories[1]}</li>)}
                </ul>
            </div>
          

            <p className='text-black text-2xl mt-2 mb-4'>{data.title}</p>
            <p className='text-black line-clamp-2'
              dangerouslySetInnerHTML={{ __html:data.content }}/>


        </Link>
      ))}
    </div>
    </>
  );
};
