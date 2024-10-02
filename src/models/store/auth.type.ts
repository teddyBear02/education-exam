import { RoleDataType, UserDataType } from "./user.type"

export type ResponseLogin = {
    accessToken: string
    user: UserDataType
}

export type PayloadSignUp = {
    email: string,
    password: string,
    name: string
    passwordAgain?: string
    role: RoleDataType
}

export type PayloadLogin = {
    email: string,
    password: string
}

export type InitialAuthState = {
    loading : boolean
    error: Error | unknown ,
    user: UserDataType | null
}