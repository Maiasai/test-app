import React from 'react';
import { posts } from './posts';


// HTML文字列 → テキストだけ抽出（タグを除去）
const stripHtml = (html) => {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || '';
};

// 54文字で切って「…」を付ける＞改行\n を <br> に戻す
// sliceで先頭から maxLengthの文字数だけ切り取って「…」を付ける
const formatContent = (html, maxLength = 54) => {
  const plainText = stripHtml(html);
  const trimmedText =
    plainText.length > maxLength
      ? plainText.slice(0, maxLength) + '…'
      : plainText;

  return trimmedText.replace(/\n/g, '<br />');
};


export const TopPage = () => {

  return(
    <div className='px-4 my-10'>
 

      { posts.map((data)=> (
         <div key={data.id} className='text-black mb-8 p-4 border border-gray-300'>
           <div className='flex justify-between'>
              <p className='text-gray-400 text-[12.8px]'>{new Date(data.createdAt).toLocaleDateString('ja-JP')}</p>
            
              <ul className='flex'>
              <p className='text-blue-600 text-[12.8px] mr-2 py-1  px-2 border border-blue-500 rounded'>react</p>
              <p className='text-blue-600 text-[12.8px] mr-2 py-1  px-2  border border-blue-500 rounded'>TypeScript</p>
              </ul>
            </div>
          

            <p className='text-black text-2xl mt-2 mb-4'>{data.title}</p>
            <p className='text-black'
  dangerouslySetInnerHTML={{ __html: formatContent(data.content) }} 
/>




         </div> 
      ))}  
    </div> 

  );

}

