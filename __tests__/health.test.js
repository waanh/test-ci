import { getHealthStatus } from '../src/health';

test('should return "healthy" for health above 50', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
  const character = { name: 'Лучник', health: 45 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('should return "critical" for health below 15', () => {
  const character = { name: 'Воин', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});
