import React from 'react';
import './index.css';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';
import { router } from './routesLink';


const root = createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
  );
