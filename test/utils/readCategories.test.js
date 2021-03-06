const fs = require('promise-fs');
const { readCategories } = require('../../src/utils/categoriesJSON');

describe('the read categories function', () => {
  it('should call fs readfile ', async () => {
    const mockFS = jest.spyOn(fs, 'readFile');
    mockFS.mockResolvedValue('[]');
    await readCategories();
    expect(mockFS).toHaveBeenCalledWith('./resources/categories.json');
    mockFS.mockReset();
  });
  it('should retun an array containing the categories', async () => {
    const mockFS = jest.spyOn(fs, 'readFile');
    mockFS.mockResolvedValue('[]');
    const mockJSON = jest.spyOn(JSON, 'parse');
    mockJSON.mockResolvedValue([]);
    const result = await readCategories();
    expect(result).toEqual([]);
  });
});
