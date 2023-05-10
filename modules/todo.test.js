const { addTask, deleteTask } = require('../_mocks_/todo.js');

describe('We add the addtask and deleteTask functions ', () => {
  test('Will add the task', () => {
    const newItem = addTask(
      {
        task: 'Add the description for test',
        id: 1,
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
    })).toStrictEqual([]);
  });
});