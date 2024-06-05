import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

import './styles/index.less';

console.log(11111, 'HeLLO_WORLD');

const domNode = document.getElementById('root');

const root = createRoot(domNode);

root.render(<App />);

