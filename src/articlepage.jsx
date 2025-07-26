import React from 'react';
import {useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';



export const ArticlePage = () => {
  //URLパラメータ（ルートパラメータ）を取得するためのもの
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetcher = async () => {
      try {
        const resp = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        const data = await resp.json();

        console.log('API Response:', data);
        setDetail(data.post);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
      };
          
      fetcher();
    },[]);

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました: {error}</p>;
  if (!detail) return <p>データが見つかりませんでした</p>;

          


  return(
    <div className='p-10'>
    
    <div className='w-full max-w-3xl mx-auto '>
      <img src = "/800x400.png" alt="800×400て書いてある画像" className="w-[768px]"></img></div>

    <div className='w-full max-w-3xl mx-auto p-4 m-0'>
    <div className='flex justify-between'>
      <p className='text-gray-400 text-[12.8px] list-none'>{new Date(detail.createdAt).toLocaleDateString('ja-JP')}</p>
          

      <ul className='flex'>
        {detail.categories.map((category,index)=> (
          <li key={index} 
          className='text-blue-600 text-[12.8px] mr-2 py-1  px-2 border border-blue-500 rounded list-none'>{category}</li>
        ))}
      </ul>

        
      </div>
        <p className='text-black text-2xl mt-2 mb-4'>{detail.title}</p>
        <p className='text-black '
          dangerouslySetInnerHTML={{ __html:detail.content }}/>
      </div>
    </div>

  );

}

