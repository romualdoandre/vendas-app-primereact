import { ReactNode } from 'react'
import { Menu } from 'primereact/menu'


interface LayoutProps {
    titulo?: string; 
    children?: ReactNode;
    mensagens?: Array<string>;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) =>{
    let items = [{
        label: 'Vendas App', items:[
        { label: 'Dashboard', icon: 'pi pi-chart-bar', url:'/' },
        { label: 'Clientes', icon: 'pi pi-user', url: '/clientes' },
        { label: 'Produtos', icon: 'pi pi-warehouse', url:'/produtos' },
        { label: 'Vendas', icon: 'pi pi-dollar', url:'/vendas' },
        { label: 'Sair', icon: 'pi pi-sign-out' }
        ]
    }
    ];

    return (
    <div className="grid">
        <div className='col-3'>
        <Menu model={items}/>
        </div>
        <div className='col'>
        <div className="surface-0 p-4 shadow-2 border-round">
            
            <div className="text-3xl font-medium text-900 mb-3">{props.titulo}</div>
                {props.mensagens /*&& 
                    props.mensagens.map( msg => <Message key={msg.texto} {...msg}  />)*/
                }
                <div className="block">
                {props.children}
                </div>                                
        </div>
        </div>
    </div>)
}