import React from 'react';

// React Routerの関数をインポート（ルーター構築に使用）
import { Routes,Route } from 'react-router-dom';

// 各ページコンポーネントをインポート
import { Layout } from './Layout';
import { TopPage } from './TopPage';
import { ArticlePage } from './articlepage1';



// ルーティング定義
export const App = () => {

  return (
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

