const fs = require('promise-fs');
const { writeCategories } = require('../../src/utils/categoriesJSON');

describe('the write categories function', () => {
  it('should call fs writefile with the category array passed', async () => {
    fs.writeFile = jest.fn();
    await writeCategories(['123', 'abc']);
    expect(fs.writeFile).toHaveBeenCalledWith('./resources/categories.json', ['123', 'abc']);
  });
});
