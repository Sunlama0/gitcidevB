const { getTasks, reset, addTask, toggleTask, countDone } = require('../lib/tasks');

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

test('countDone vaut 0 quand rien n’est terminé', () => {
  addTask('A');
  addTask('B');
  expect(countDone()).toBe(0);
});

test('countDone compte uniquement les tâches done=true', () => {
  const a = addTask('A');
  const b = addTask('B');
  const c = addTask('C');

  toggleTask(a.id); // A -> done
  toggleTask(c.id); // C -> done

  expect(countDone()).toBe(2);
});

test('countDone reste cohérent après plusieurs toggles', () => {
  const t = addTask('X');
  expect(countDone()).toBe(0);
  toggleTask(t.id);
  expect(countDone()).toBe(1);
  toggleTask(t.id);
  expect(countDone()).toBe(0);
});