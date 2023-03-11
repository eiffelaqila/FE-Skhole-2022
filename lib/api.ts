import axios from "axios";

export interface IResponse<T> {
    data: T;
    message: string;
}

export async function getAPI<T>(path: string, params?: any) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.get(
        `${process.env.BACKEND_SERVER}${path}`,
        {
            params: parameter,
        }
    );

    return data;
}

export async function getAPIAuth<T>(
    path: string,
    authorization: string,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.get(
        `${process.env.BACKEND_SERVER}${path}`,
        {
            headers: { Authorization: `Bearer ${authorization}` },
            params: parameter,
        }
    );

    return data;
}

export async function postAPI<T>(path: string, payload: any, params?: any) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.post(
        `${process.env.BACKEND_SERVER}${path}`,
        payload,
        {
            params: parameter,
        }
    );

    return data;
}

export async function postAPIAuth<T>(
    path: string,
    payload: any,
    authorization: string,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.post(
        `${process.env.BACKEND_SERVER}${path}`,
        payload,
        {
            headers: { Authorization: `Bearer ${authorization}` },
            params: parameter,
        }
    );

    return data;
}

export async function putAPI<T>(path: string, payload: any, params?: any) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.put(
        `${process.env.BACKEND_SERVER}${path}`,
        payload,
        {
            params: parameter,
        }
    );

    return data;
}

export async function putAPIAuth<T>(
    path: string,
    payload: any,
    authorization: string,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.put(
        `${process.env.BACKEND_SERVER}${path}`,
        payload,
        {
            headers: { Authorization: `Bearer ${authorization}` },
            params: parameter,
        }
    );

    return data;
}

export async function deleteAPI<T>(path: string, params?: any) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.delete(
        `${process.env.BACKEND_SERVER}${path}`,
        {
            params: parameter,
        }
    );

    return data;
}

export async function deleteAPIAuth<T>(
    path: string,
    authorization: string,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.delete(
        `${process.env.BACKEND_SERVER}${path}`,
        {
            headers: { Authorization: `Bearer ${authorization}` },
            params: parameter,
        }
    );

    return data;
}
