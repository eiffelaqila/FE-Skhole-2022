import axios from 'axios';

export interface IResponse<T> {
    data: T;
    message: string;
}

export async function getAPI<T>(
    path: string,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.get(
        `${process.env.BACKEND_SERVER}${path}`,
        {
            params: parameter,
        }
    )

    return data;
}

export async function postAPI<T>(
    path: string,
    payload: any,
    params?: any
) {
    const parameter = params ?? undefined;

    const { data }: { data: IResponse<T> } = await axios.postForm(
        `${process.env.BACKEND_SERVER}${path}`,
        payload,
        {
            params: parameter,
        }
    )

    return data;
}