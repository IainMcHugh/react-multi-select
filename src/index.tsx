import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { HomeA } from 'src/components/pages/HomeA/HomeA';
import { HomeB } from './components/pages/HomeB/HomeB';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <HomeA />
    <HomeB />
  </StrictMode>
);
