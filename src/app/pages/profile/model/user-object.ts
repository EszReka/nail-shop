import { AdressObject } from "./adress-object";

export class UserObject {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string; 
    address : AdressObject;

    constructor();
    constructor(id: string, name: string,
        email: string, password: string,
        phone: string, address : AdressObject);
    constructor(id?: string, name?: string,
        email?: string, password?: string,
        phone?: string, address?: AdressObject){
        this.id = id ?? "";
        this.name = name ?? "";
        this.email = email ?? "";
        this.phone = phone ?? "";
        this.password = password ?? "";
        this.address = address ?? Object.assign({value:null});
        }
}
