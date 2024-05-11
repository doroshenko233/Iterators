import Team from "./Team";
import { Bowerman, Magician, Swordsman } from "./Character";

const bowerman = new Bowerman('Nick');
const swordsman = new Swordsman('Nick');
const magician = new Magician('Nick');

let team = new Team();

team.add(bowerman); 
team.add(swordsman); 
team.add(magician); 

for (const hero of team) {
   console.log(hero);
  
}
const iterator = team[Symbol.iterator](); 
console.log(iterator.next().value)
console.log(iterator.next().value)

