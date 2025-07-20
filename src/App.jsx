import React from 'react';
import { Link , Outlet} from 'react-router-dom';
import { TopPage } from './TopPage';



export const App = () =>  {

  return (
    <>
    <div className="bg-black/80">
      <ul className="h-16 flex justify-between items-center w-full px-4">
        <li className="text-white"><Link to="/">Blog</Link></li>
        <li className="text-white"><Link to="/">お問い合わせ</Link></li>
      </ul>
      </div>

      <hr />
      {/* ここにOutletがあるのでヘッダー下にページ（子コンポーネント「TopPage」が表示される */}
      <Outlet />
      </>
  );
}