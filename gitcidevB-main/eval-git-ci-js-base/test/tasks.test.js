const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks');

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

test('toggleTask inverse le statut done', () => {
  const t = addTask('Tester toggle');
  const updated = toggleTask(t.id);
  expect(updated.done).toBe(true);
  expect(getTasks()[0].done).toBe(true);
});

test('toggleTask renvoie une erreur si id inconnu', () => {
  expect(() => toggleTask(999)).toThrow('Task not found');
});