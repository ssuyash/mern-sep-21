var dog = {
    name:"Tommy",
    breed:"Desi",
    sayHi:function(name){
        console.log("bhow bhow", name)
    },
    displayName:function(){
        console.log(this.name) //this keyword represents object, inside object
    }
}


dog.sayHi("Bhaivabh")
