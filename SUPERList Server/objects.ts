export class Product {
    public productName: string;
    public productAmount : number;
    public isTook : boolean;

    constructor(name: string, amount: number){
        this.productName = name;
        this.productAmount = amount;
        this.isTook = false;    
    }   
}