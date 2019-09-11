export class post {
    //class attributes
    public message : string;
    public to : string;
    public from : string;
    public createdOn: Date;
    public imageUrl: string;

    //constructor
  constructor(){
    this.from = "Carlos";
    this.to = "Everyone";
    this.createdOn = new Date();
  }
    //methods
}