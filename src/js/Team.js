
export default class Team {
  constructor() {
    this.members = new Set();
  }
  
  add(...heros) {
    heros.forEach(hero => this.members.add(hero));
}
  
   get() {
    return Array.from(this.members);
  } 

  [Symbol.iterator] () {
     const team = this.get()
     console.log(team)
     const last = team.length;
     let current = 0;

      return {
          next() {
              if ( current < last ) {
                const value = team[current];
                console.log(value)
                current += 1;
                return { done: false, value: value, };
              } else {
                 return { done: true, };
                }
          },
      };
  }
}

