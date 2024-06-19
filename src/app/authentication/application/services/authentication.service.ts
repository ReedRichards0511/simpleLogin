import { LoginUserInterface, LoginUserResponseInterface } from "../../domain";
import { authenticationBaseURL } from "../api/auhtenticationAPI";


export class AuthenticationService {

    async loginUser(body: LoginUserInterface): Promise<LoginUserResponseInterface> {
        try {
            const resp = await authenticationBaseURL.post<LoginUserResponseInterface>('/login/', body);
            return resp?.data;
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    }

}