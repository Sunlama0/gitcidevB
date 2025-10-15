const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});


test('addTask ajoute une tâche correctement', () => {
  const task = addTask('  Faire les courses ');
  expect(task.name).toBe('Faire les courses');
  expect(task.done).toBe(false);
  expect(task.id).toBe(1);
  expect(getTasks().length).toBe(1);
});

test('addTask rejette un nom vide', () => {
  expect(() => addTask(' ')).toThrow('Empty name');
});

test('addTask rejette un nom non string', () => {
  expect(() => addTask(123)).toThrow('Invalid name');
});