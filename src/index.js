import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const Index = () => {
    return (
        <App/>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
