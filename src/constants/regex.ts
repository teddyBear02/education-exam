export const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const regexCheckTypeNum = /^-?\d*(\.\d*)?$/;

export const regexNumber = /^-?\d*\.?\d*$/;

export const regexPhone = /^(\+?(\d{1,3})?((\(\d{1,3}\))|\d{1,3})?(\-?\d{1,4})?)(\d{7,10})$/;

export const regexCheckPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,64}/;

export const ACCEPT_FILE = ['.fbx', '.zip'];

export const ACCEPT_AVATAR = ['.jpg', '.png', 'image/jpg', 'image/png', 'image/jpeg'];

export const regexLongitude = /^-?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

export const regexLatitude = /^-?([0-8]?[0-9](\.[0-9]+)?|90(\.0+)?)$/;

