import Team from "./Team";
import { Bowerman, Magician, Swordsman } from "./Character";

let arrayHeros = [
    new Bowerman('Nick'),
    new Swordsman('Nick'),
    new Magician('Nick'),
]

let team = new Team();

team.add(arrayHeros);

for (const hero of team) {
    console.log(hero);
}