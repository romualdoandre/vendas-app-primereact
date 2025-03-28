import '../styles/globals.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { AppProps } from "next/app";

function VendasApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default VendasApp