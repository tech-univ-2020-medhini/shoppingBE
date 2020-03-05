const getCategories = require('../../src/handler/categories');
const categories = require('../../src/utils/getCategories');

describe('the get categories handler', () => {
  const mockReq = {
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 with the categories array', async () => {
    const mockCategoriesFS = jest.spyOn(categories, 'readCategories');
    mockCategoriesFS.mockResolvedValue(['123', '456']);
    await getCategories(mockReq, mockH);
    expect(mockCategoriesFS).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith(['123', '456']);
    mockCategoriesFS.mockRestore();
  });
  it('should respond with 500 error if an error occurs', async () => {
    const mockCategoriesFS = jest.spyOn(categories, 'readCategories');
    mockCategoriesFS.mockRejectedValue(new Error('error'));
    await getCategories(mockReq, mockH);
    expect(mockCategoriesFS).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockCategoriesFS.mockRestore();
  });
});
