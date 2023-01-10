import '../styles/globals.css'
import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { Provider } from 'react-redux' ;
import store from '../redux/store' ;
import Layout from '../components/Layout' ;

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
