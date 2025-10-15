
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

function addTask(name) {
  if (typeof name !== 'string') throw new Error('Invalid name');
  const trimmed = name.trim();
  if (trimmed.length === 0) throw new Error('Empty name');

  const newTask = { id: nextId++, name: trimmed, done: false };
  tasks.push(newTask);
  return newTask;
}


module.exports = { getTasks, reset, addTask };
