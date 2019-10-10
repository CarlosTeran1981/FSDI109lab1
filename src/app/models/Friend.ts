export class Friend{
    public name : string = ""; // <-- the actual name of friend
    public belongTo : string = ""; // <-- to specify that it belong to me

    constructor(){
        this.belongTo = "Carlos";
    }
}