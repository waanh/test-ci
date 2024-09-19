import sortHeroesByHealth from './sortHeroes';

test('sort heroes by health', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
});

test('check with equal health', () => {
  const heroes = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  const sortedHeroes = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
});
