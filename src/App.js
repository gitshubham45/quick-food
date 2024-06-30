import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import x from "./utils/constants"


const AppLayout = () => {

    console.log(x);

    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);