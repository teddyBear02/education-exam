import { UserDataType } from "./user.type"

export type ResponseLogin = {
    accessToken: string
    expires: string
    expiryIn: number
    refreshToken: string
    user: UserDataType
}


