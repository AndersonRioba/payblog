import Header from '../components/Header/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header></Header>
    <main className='m-0 mr-0 p-0'>
      <Component {...pageProps} />
    </main>
    </>
  );
}

export default MyApp;