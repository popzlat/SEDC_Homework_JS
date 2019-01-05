
    // constructor function for Pet
function Pet(_name, _type, _breed, _preferredFood, _age, _isHelthy,_owner) {
    let Pet = {
        name: _name,
        type: _type,
        breed: _breed,
        preferredFood: _preferredFood,
        age: _age,
        isHelthy: _isHelthy,
        owner: _owner,
        eat: function () {
            // console.log(this.type + " " + this.name + " is eating apples " + this.preferredFood);

        },
        adopt : function (_person) {
            this.owner = _person;
        },

        isAdopted: function () {
            if (this.owner === "")
                return false;
            else
                return true;
        }

    };
    return Pet;
}


let dog = new Pet("Aron", "Dog", "Labrador","apple",10,"Healthy","")
let cat = new Pet("Riko","Cat","Persian","Milk",7,"Not Healthy","")
let horse = new Pet("Bukefal","Horse","Mustang","Grass",15,"Healthy","")
let parrot = new Pet("Koki","Parrot","Carribian","Seeds ",5,"Healthy","")
let monkey = new Pet("Roki","Monkey","Gorila","Bananas",20,"Not Healthy","")

let petShelter = [dog,cat,horse,parrot,monkey];

// Constructor function for Person
function Person(_firstName, _lastName, _age) {
    let person = {
        firstName: _firstName,
        lastName: _lastName,
        age: _age,
        adopt : function(animalType){
            
            
            petShelter.forEach((animal,index) => {
                
                if(animal.type==animalType){
                    // console.log(this.firstName + " adopted " + this.type + " with the name " + animal.name)
                    petShelter.splice(index,1);
                    animal.adopt(this.firstName);

                    
                   this.pets.push(animal)
                    console.log(petShelter);
                    console.log(this.pets);
                       }
            });
            },
            pets : [],
            abandon : function(animalType){
                this.pets.forEach((animal,index)=>{
                    if(animal.type === animalType){
                        this.pets.splice(index,1);
                        animal.owner = "";
                        petShelter.push(animal);
                        console.log(this.pets);
                        console.log(petShelter);

                    }

                })

            }
    }
    
    return person;
};

// Persons
let person1 = Person("John", "Johnson",24);
let person2 = Person("Richard", "Donson",32);
