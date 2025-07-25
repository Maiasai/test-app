import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { lazy,Suspense }  from 'react';



// ルーティング定義
export const App = ()=>{

  return(

    <Routes>
      {/* 親ルートに共通レイアウトを配置 */}
      <Route path="/" element={<Layout />}>
      {/* 子ルート（Outletに差し込まれる） */}
      <Route index element={<TopPage />} />
      <Route path="posts/:id" element={<ArticlePage />} />   
    </Route>
    </Routes>

 );
}

