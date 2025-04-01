import { httpClient } from "../http";
import { Cliente } from "../models/clientes";
import { AxiosResponse } from "axios";
import { Page } from "../models/common/page";

const resourceUrl: string = "/api/clientes"

export const useClienteService = () =>{
    const salvar = async (cliente: Cliente, headers?: any): Promise<Cliente> => {
        const response: AxiosResponse<Cliente> = await httpClient.post<Cliente>(resourceUrl, cliente, headers)
        return response.data
    }
    const atualizar = async (cliente: Cliente, headers?: any): Promise<void> =>{
        const url: string = `${resourceUrl}/${cliente.id}`
        const response: AxiosResponse<Cliente> = await httpClient.put<Cliente>(url, cliente, headers)
    }

    const carregarCliente = async (id, headers?: any) : Promise<Cliente> => {
        const url: string = `${resourceUrl}/${id}`
        const response: AxiosResponse<Cliente> = await httpClient.get(url, headers);
        return response.data;
    }

    const deletar = async (id, headers?: any) : Promise<void> => {
        const url: string = `${resourceUrl}/${id}`
        await httpClient.delete(url, headers)
    }

    const find = async (
        nome: string = '', 
        cpf: string = '', 
        page: number = 0, 
        size: number = 10,
        headers?: any) : Promise<Page<Cliente>> =>  {
        const url = `${resourceUrl}?nome=${nome}&cpf=${cpf}&page=${page}&size=${size}`
        
        const response: AxiosResponse<Page<Cliente>> = await httpClient.get(url, headers);
        
        return response.data;
    }   

    return {
        salvar,
        atualizar,
        carregarCliente,
        deletar,
        find
    }
}