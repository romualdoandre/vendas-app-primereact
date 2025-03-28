import {useState} from 'react';
import {Button} from 'primereact/button';
import Head from 'next/head'
import { Layout } from '@/components/layout';

export default function Home() {
    const [count,setCount] = useState(0);
    
    return (
        <>
        <Head>
            <title>Vendas App</title>
            <link rel="icon" href='/favicon.ico' />
        </Head>
        <Layout titulo='primeira página'>
        <div className="text-center">
            <Button label="Click" icon="pi pi-plus" onClick={e => setCount(count + 1)}></Button>
            <div className="text-2xl text-900 mt-3">{count}</div>
        </div>
        </Layout>
        </>
    );
}