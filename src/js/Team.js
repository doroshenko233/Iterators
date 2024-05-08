export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(...heros) {
    this.members = new Set([...this.members, ...heros]);
}

  get() {
    return Array.from(this.members);
  } 

  [Symbol.iterator] () {
     const team = this.get()
     const last = team.length;
     let current = 0;

      return {
          next() {
              if ( current < last ) {
                const value = team[current];
                current += 1;
                return { done: false, value: value, };
              } else {
                 return { done: true, };
                }
          },
      };
  }
}