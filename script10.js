class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    view_data(){
        console.log("view your data");
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }


    editdata(){
        console.log("edited value");
    }
}

let student1=new user("annu","abc@gmail.com");
let student2=new user("anu","xyz@gamil.com");

let admin1= new Admin("admin","admin@gmail.com");