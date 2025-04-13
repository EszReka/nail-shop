import { AdressObject } from "./adress-object";

export class UserObject {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string; 
    address : AdressObject;

    constructor();
    constructor(name: string,
        email: string, password: string,
        phone: string, id: number, address : AdressObject);
    constructor(name?: string,
        email?: string, password?: string,
        phone?: string,id?: number, address?: AdressObject){
        this.id = id ?? 0;
        this.name = name ?? "";
        this.email = email ?? "";
        this.phone = phone ?? "";
        this.password = password ?? "";
        this.address = address ?? Object.assign({value:null});
        }
}
