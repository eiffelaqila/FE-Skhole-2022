import IUserData from "./IUserData";

export default interface ILoginData {
    token: string;
    user: IUserData;
}