import '../styles/globals.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { AppProps } from "next/app";
import { PrimeReactProvider } from 'primereact/api';

function VendasApp({ Component, pageProps }: AppProps) {
  const value = {
    locale: 'pt-BR'  
    };
  return <PrimeReactProvider value={value}>
    <Component {...pageProps} />
  </PrimeReactProvider>
}

export default VendasApp