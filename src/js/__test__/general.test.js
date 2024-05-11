import Team from '../Team';
import Character from '../Character';
import { Bowerman, Magician, Swordsman } from '../Character';

test('Проверка на ошибки в type', () => {
  expect(() => {
    new Character('Nick', '')
  }).toThrow(new Error('Такого героя не существует!'));
});

test('Правильно создаться объект', () => {
 const warior = new Character('Nick', 'Bowerman'); 
 const correct = {
   name: 'Nick',
   type: 'Bowerman',
   health: 100,
   level: 1,
   attack: undefined,
   defence: undefined
 };

 expect(warior).toEqual(correct);
});

test('Правильно создается объект Magician', () => {
  const magician = new Magician('Nick');
  const correct = {
     name: 'Nick',
     type: 'Magician',
     health: 100,
     level: 1,
     attack: 10,
     defence: 40
  };

  expect(magician).toEqual(correct);
});

test('Правильно создается объект Swordsman', () => {
  const swordsman = new Swordsman('Nick');
  const correct = {
     name: 'Nick',
     type: 'Swordsman',
     health: 100,
     level: 1,
     attack: 40,
     defence: 10
  };

  expect(swordsman).toEqual(correct);
});

test('Правильно создается объект Bowerman', () => {
  const bowerman = new Bowerman('Nick');
  const correct = {
     name: 'Nick',
     type: 'Bowerman',
     health: 100,
     level: 1,
     attack: 25,
     defence: 25
  };

  expect(bowerman).toEqual(correct);
});

describe('Тест iterator', () => {
  test('team{Symbol.iterator]', () => {
    const bowerman = new Bowerman('Nick');
    const swordsman = new Swordsman('Nick');
    const magician = new Magician('Nick');
      
    const team = new Team();
      
      team.add(bowerman); 
      team.add(swordsman); 
      team.add(magician); 
    
      const expected = [];

      for (const hero of team) {
          expected.push(hero);
      }

      expect(expected).toEqual(team.get());
  });
});


test('Magician', () => {
  const team = new Team();
  const hero = new Magician('Nick');
  team.add(hero);

  const iterator = team[Symbol.iterator](); 
  const expected = iterator.next().value;
  
  expect(expected).toEqual(hero);
})