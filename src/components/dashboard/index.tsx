import { VendaPorMes } from '@/app/models/dashboard'
import { MESES } from '@/app/util/meses'
import { Card } from 'primereact/card'
import { Chart } from 'primereact/chart'
import { useState, useEffect } from 'react'

interface DashboardProps {
    clientes?: number;
    vendas?: number;
    produtos?: number;
    vendasPorMes?: VendaPorMes[];
}

export const Dashboard: React.FC<DashboardProps> = ({ clientes, vendas, produtos, vendasPorMes }) => {

    const produtoCardStyle = {
        background: 'red',
        color: 'white'

    }
    const vendaCardStyle = {
        background: 'blue',
        color: 'white'
    }
    const clienteCardStyle = {
        background: 'green',
        color: 'white'
    }

    const [chartData, setChartData] = useState({})

    const carregaDadosGrafico = () => {
        const labels: string[] = vendasPorMes?.map(vm=>MESES[vm.mes-1])
        const valores = vendasPorMes?.map(vm=>vm.valor)
        const dadosGrafico = {
            labels,
            datasets:[{
                label: 'Valor Mensal',
                backgroundColor: '#42A5F5',
                data: valores
            }
            ]
        }
        setChartData(dadosGrafico)
    }

    useEffect(carregaDadosGrafico,[])

    return (
        <div className="flex">
            <div className="grid">
                <div className="col">
                    <Card title='Produtos' style={produtoCardStyle}>
                        <p className='m-0'>
                            {produtos}
                        </p>
                    </Card>
                </div>
                <div className="col">
                    <Card title='Clientes' style={clienteCardStyle}>
                        <p className='m-0'>
                            {clientes}
                        </p>
                    </Card>
                </div>
                <div className="col">
                    <Card title='Vendas' style={vendaCardStyle}>
                        <p className='m-0'>
                            {vendas}
                        </p>
                    </Card>
                </div>
            </div>
            <div className='grid'>
                <div className="col">
                    <Chart type='bar' data={chartData}
                    />
                </div>
            </div>
        </div>
    )
}