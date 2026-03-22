class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    view_data(){
        console.log("view your data");
    }
}

let student1=new user("annu","abc@gmail.com");
let student2=new user("anu","xyz@gamil.com");