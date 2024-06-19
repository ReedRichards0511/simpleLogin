import { useMutation } from "@tanstack/react-query";
import { LoginUserInterface, LoginUserResponseInterface } from "../../domain";
import { authenticationService } from "../../../core/services.instances";


interface UseLoginHook {
    loginUser: (loginUser: LoginUserInterface) => Promise<LoginUserResponseInterface>;
    isLoadingLogin: boolean;
    isErrorLogin: boolean;
    error: Error | null;
}


export const useLogin = (): UseLoginHook => {

    const { mutateAsync, isError, isPending, error } = useMutation({
        mutationFn: async (loginUser: LoginUserInterface) => {
            return await authenticationService.loginUser(loginUser);
        }
    });

    const loginUser = async (loginUser: LoginUserInterface): Promise<LoginUserResponseInterface> => {
        return await mutateAsync(loginUser);
    };

    return {
        loginUser,
        isLoadingLogin: isPending,
        isErrorLogin: isError,
        error
    }

}