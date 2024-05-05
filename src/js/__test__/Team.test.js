import Team from '../Team';

test('Перебирает объект', () => {
  const iterableObject = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const team = new Team([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ]);

  function getHero(obj) {
    let value;
    for (const item of obj) {
      value = item;
    }
    return value;
  }
  expect(getHero(team)).toEqual(iterableObject);
});