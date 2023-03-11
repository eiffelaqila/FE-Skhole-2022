import ILoginData from "../models/ILoginData";

export function setUserToken(loginData: ILoginData) {
    const data = {
        token: loginData.token,
        user: loginData.user,
        expired: new Date().getTime() + 2 * 60 * 60 * 1000,
    };

    localStorage.setItem("userToken", JSON.stringify(data));
    return data;
}

export function getUserToken() {
    const data = localStorage.getItem("userToken");

    if (data) {
        try {
            const jsonData = JSON.parse(data);

            if (jsonData?.expired > new Date().getTime()) {
                return jsonData;
            }

            localStorage?.removeItem("userToken");
        } catch {
            localStorage?.removeItem("userToken");
        }
    }

    return null;
}
