//1. 
//code given
console.log(hello);
var hello = 'world';
//how it will be interpreted: 
var hello
console.log(hello);//logs undefinied
hello = 'world';

//2. 
//code given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//how it will be interpreted
var needle 
function test() {
    var needle
    needle = 'magnet'
    console.log(needle)
}
needle = 'haystack'
test (); //will console.log magnet. needle is defined within the scope of the function and that will not effect the value of it outside of the function
console.log(needle)

//3. 
//code given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//how it will be interpreted
var brendan 
brendan = 'super cool'
function print(){
    brendan = 'only okay'
    console.log(brendan);
}
console.log(brendan) // will put out 'super cool'. the print function defined but is never called so it won't ever console.log that

//4. 
//code given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//how it will be interpreted
var food
function eat() {
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food) //will console.log the word chicken
eat(); //this code will console.log the word half-chicken. the console.log is called before food is redifined as gone

//5. 
//code given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//how it is interpreted
var mean
mean(); //the console will return an error at this line and wont go any further. mean is declared as a variable not as a function

//6. 
//code given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//how it's interpreted
var genre
function rewind() {
    var genre
    genre = "rock";
    console.log(genre)
    genre = "r&b";
    console.log(genre);
}
console.log(genre) //will return undefinied because var genre has not yet been assigned a value
genre = "disco"; 
rewind(); //will return rock and then r&b per the function definition
console.log(genre) //will return disco

//7. 
//code given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//how it's interpreted
dojo = "san jose";
console.log(dojo); //will return an error at this point because the variable has not been definied in the global scope. Variable is only definied in the scope of the local fucntion learn()

//^^was wrong about above code. It ran fine..? output sanjose, seattle, burbank, san jose

//8. 
//code given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//how it's interpreted
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); //code will stop at this line. const cannot be changed within the function. must stay constant. will get an error here
console.log(makeDojo("Berkeley", 0));