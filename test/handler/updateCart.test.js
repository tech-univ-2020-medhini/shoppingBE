const updateCartHandler = require('../../src/handler/cart');
const cart = require('../../src/helpers/updateCart');

describe('the update cart handler', () => {
  const mockReq = {
    payload: {
      id: 1,
      value: 4,
    },
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 and the updated cart values', async () => {
    const mockCart = jest.spyOn(cart, 'updateCart');
    mockCart.mockResolvedValue({});
    await updateCartHandler(mockReq, mockH);
    expect(mockCart).toHaveBeenCalledWith(1, 4);
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith({});
    mockCart.mockRestore();
  });
  it('should respond with 500 error if an error occurs', async () => {
    const mockCart = jest.spyOn(cart, 'updateCart');
    mockCart.mockRejectedValue(new Error('error'));
    await updateCartHandler(mockReq, mockH);
    expect(mockCart).toHaveBeenCalledWith(1, 4);
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockCart.mockRestore();
  });
});
