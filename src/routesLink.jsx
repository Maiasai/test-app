import React from 'react';

// React Routerの関数をインポート（ルーター構築に使用）
import { createBrowserRouter } from 'react-router-dom';

// 各ページコンポーネントをインポート
import { App } from './App';
import { TopPage } from './TopPage';


// ルーティング定義
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <TopPage /> },
      
    ],
  },
]);
