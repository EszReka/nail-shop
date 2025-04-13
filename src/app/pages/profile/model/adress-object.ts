export class AdressObject {
    userId: number;
    street: string;
    city: string;
    postalcode: number; 

    constructor();
    constructor(userId:number, street:string,city:string,postalcode:number);
    constructor(userId?:number, street?:string,city?:string,postalcode?:number){
        this.userId = userId ?? 0;
        this.street = street ?? "";
        this.city = city ?? "";
        this.postalcode = postalcode ?? 0;
        }
}
