const updateQuantityHandler = require('../../src/handler/quantity');
const quantities = require('../../src/helpers/updateQuantity');

describe('the update quantity handler', () => {
  const mockReq = {
    payload: [{
      id: 1,
      quantity: 4,
      cart: 3,
    }],
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };
  it('should respond with 200 and the updated quantity values', async () => {
    const mockQuantity = jest.spyOn(quantities, 'updateQuantity');
    mockQuantity.mockResolvedValue({});
    await updateQuantityHandler(mockReq, mockH);
    expect(mockQuantity).toHaveBeenCalledWith(1, 1);
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith('updated');
    mockQuantity.mockRestore();
  });
  xit('should respond with 500 error if an error occurs', async () => {
    const mockQuantity = jest.spyOn(quantities, 'updateQuantity');
    mockQuantity.mockRejectedValue(new Error('error'));
    await updateQuantityHandler(mockReq, mockH);
    expect(mockQuantity).toHaveBeenCalledWith(1, 1);
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockQuantity.mockRestore();
  });
});
