import { httpClient } from "../http";
import { AxiosResponse } from "axios";
import { DashboardData } from "../models/dashboard";

const resourceUrl: string = "/api/dashboard"

export const useDashboardService = () => {
    
    return {
        get: async (): Promise<DashboardData> =>{
            const response: AxiosResponse<DashboardData> = await httpClient.get(resourceUrl)
            return response.data
        }
    }
}