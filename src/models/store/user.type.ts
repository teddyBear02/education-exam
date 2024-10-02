export enum RoleDataType{
    ADMIN = "Admin",
    USER = " User"
}

export type UserDataType = {
    name: string,
    email: string,
    role: RoleDataType[],
    phoneNumber: number | string | null
}