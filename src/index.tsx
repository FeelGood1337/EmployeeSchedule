import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'pages/Root';

const App = () => (
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
