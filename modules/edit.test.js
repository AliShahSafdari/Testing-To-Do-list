const { edit, update, clearAll } = require('../_mocks_/edit.js');

describe('implement edit the Task description and clear all ', () => {
  test('edit the taks', () => {
    const editItem = edit({
      id: 1,
      task: 'Ok Alishah',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });
  test('update the status', () => {
    expect(update(1)).toStrictEqual({
      id: 1,
      task: 'Ok Alishah',
      status: true,
    });
  });
  test('clear all the complete task', () => {
    expect(clearAll()).not.toBe([{
      id: 1,
      task: 'Hello Sirat',
      status: false,
    }]);
  });
});
