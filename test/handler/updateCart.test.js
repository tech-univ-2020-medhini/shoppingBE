const getCartHandler = require('../../src/handler/categories');
const cart = require('../../src/utils/categoriesJSON');

describe('the update cart handler', () => {
  const mockReq = {
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 with the cart values of all items above 0', async () => {
    const mockCategoriesFS = jest.spyOn(cart, 'getCart');
    mockCategoriesFS.mockResolvedValue(['123', '456']);
    await getCartHandler(mockReq, mockH);
    expect(mockCategoriesFS).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith(['123', '456']);
    mockCategoriesFS.mockRestore();
  });
  it('should respond with 500 error if an error occurs', async () => {
    const mockCategoriesFS = jest.spyOn(cart, 'getCart');
    mockCategoriesFS.mockRejectedValue(new Error('error'));
    await getCartHandler(mockReq, mockH);
    expect(mockCategoriesFS).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockCategoriesFS.mockRestore();
  });
});
