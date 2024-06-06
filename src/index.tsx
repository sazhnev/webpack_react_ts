import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

import './styles/index.less';
import { fork } from 'effector';
import { Provider } from 'effector-react';

console.log(11111, 'HeLLO_WORLD');

const domNode = document.getElementById('root');

const root = createRoot(domNode);

const scope = fork();

root.render(
    <Provider value={scope}>
        <App />
    </Provider> 
);

