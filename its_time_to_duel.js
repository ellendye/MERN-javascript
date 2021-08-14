class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target){
        //reduces target res by power
        if( target instanceof Unit ) {
            target.resilience -= this.power
            console.log(`Card played: ${this.name} takes ${this.power} resilience from Target: ${target.name}`)
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
    showStats(){
        console.log(`Name: ${this.name}, Power: ${this.power}, Resilience: ${this.resilience}`);
    }
            
}


class Effect extends Card {
    constructor(name, cost, stat, magnitude, text){
        super(name, cost)
        this.stat = stat
        this.magnitude = magnitude
        this.text = text
    }
    play(target){
        if( target instanceof Unit ) {
            if (this.stat == "resilience"){
                target.resilience += this.magnitude;
                console.log(`Card played: ${this.name} - Target: ${target.name} - Move: ${this.text}`)
            }
            else {
                target.power += this.magnitude;
            }
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 4, 3);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 4, 5);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3, "Increase targt's resilience by 3");
redBeltNinja.showStats()
hardAlgorithm.play(redBeltNinja)
redBeltNinja.showStats()
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2, "reduce target's resilience by 2");
redBeltNinja.showStats()
unhandledPromiseRejection.play(redBeltNinja)
redBeltNinja.showStats()
const pairProgramming = new Effect("Pair Programming", 3, "power", 2, "increase target's power by 2");
blackBeltNinja.showStats()
pairProgramming.play(blackBeltNinja)
blackBeltNinja.showStats()
redBeltNinja.attack(blackBeltNinja)
blackBeltNinja.showStats()





array = [2,1]
array.sort(compareFunction)
console.log(array)