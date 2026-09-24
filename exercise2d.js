//Creates an array of ages
let ages = [3,451,341,4];

//Goes through each age
let myArray = ages.map(
    (age) => {
        //Doubles Ages under 70
        if(age < 70){
            return age*2;
        }else{
            //Keeps the other ages the same
            return age;
        }
    }
)

console.log(myArray);
