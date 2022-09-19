import React from 'react';// next js 에는  굳이 없어도됌
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head';

const App = ( {Component} ) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>SIMSCENT</title>
            </Head>
            <Component />
        </>
    )
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}
export default App;