import ILogin from "../models/ILogin";
import { getUserToken, setUserToken } from "../lib/login";
import { postAPI } from "../lib/api";
import ILoginData from "../models/ILoginData";

function useAuth() {
    function authCheck() {
        try {
            if (typeof window === "undefined") {
                return undefined;
            }

            const userToken = getUserToken();

            if (!userToken) {
                return undefined;
            }

            return userToken;
        } catch (err) {
            throw err;
        }
    }

    function getUsername() {
        const userToken = authCheck();

        if (userToken) {
            return userToken.user.username;
        }

        return undefined;
    }

    async function login(loginObj: ILogin) {
        if (getUserToken() !== null) {
            localStorage?.removeItem("userToken");
        }

        try {
            const { data } = await postAPI<ILoginData>(`/auth/login`, {
                username: loginObj.username,
                password: loginObj.password,
            });

            setUserToken(data);

            return data;
        } catch (err) {
            throw err;
        }
    }

    async function logout() {
        localStorage?.removeItem("userToken");
    }

    return {
        login,
        logout,
        authCheck,
        getUsername,
    };
}

export default useAuth;
