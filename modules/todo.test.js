const { addTask, deleteTask } = require('../_mocks_/todo.js');

describe('We add the addtask and deleteTask functions ', () => {
  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Add the description for test',
        id: 1,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });

  test('when the user add a task it should be not empty on newItem', () => {
    const newItem = addTask(
      {
        task: 'Test Task 2',
        id: 2,
        status: false,
      },
    );
    expect(newItem).not.toBe([]);
  });

  test('will delete the task', () => {
    expect(deleteTask({
      task: 'Add the description for test',
      id: 1,
      status: false,
    })).not.toStrictEqual([]);
  });
});