export interface LoginUserInterface {
    username : string;
    password : string;
}


export interface LoginUserResponseInterface {
    token : string;
    id : number;
    forzar : boolean;
}