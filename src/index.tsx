import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from 'src/components/pages/Home/Home';
import { HomeB } from './components/pages/HomeB/HomeB';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Home />
    <HomeB />
  </StrictMode>
);
