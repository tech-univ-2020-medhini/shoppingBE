const { getProductsHandler } = require('../../src/handler/products');
const productHelper = require('../../src/helpers/addAndGetProducts');

describe('the get products handler', () => {
  const mockReq = {
  };
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => ({ code: mockCode })),
  };

  it('should return 200 and the products from the database', async () => {
    const mockGetProductHelper = jest.spyOn(productHelper, 'getProducts');
    mockGetProductHelper.mockResolvedValue([{}, {}]);
    const mockAddProductHelper = jest.spyOn(productHelper, 'addProducts');
    mockAddProductHelper.mockResolvedValue();
    await getProductsHandler(mockReq, mockH);
    expect(mockGetProductHelper).toHaveBeenCalled();
    expect(mockAddProductHelper).not.toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith([{}, {}]);
    mockAddProductHelper.mockRestore();
    mockGetProductHelper.mockRestore();
  });
  it('should call add products helper when no data is present in the database', async () => {
    const mockGetProductHelper = jest.spyOn(productHelper, 'getProducts');
    mockGetProductHelper.mockResolvedValue(false);
    const mockAddProductHelper = jest.spyOn(productHelper, 'addProducts');
    mockAddProductHelper.mockResolvedValue(true);
    await getProductsHandler(mockReq, mockH);
    expect(mockGetProductHelper).toHaveBeenCalledTimes(2);
    expect(mockAddProductHelper).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
    expect(mockH.response).toHaveBeenCalledWith([{}, {}]);
    mockAddProductHelper.mockRestore();
    mockGetProductHelper.mockRestore();
  });
  it('should return 500 internal server error when an error occurs', async () => {
    const mockGetProductHelper = jest.spyOn(productHelper, 'getProducts');
    mockGetProductHelper.mockRejectedValue(new Error('error'));
    await getProductsHandler(mockReq, mockH);
    expect(mockCode).toHaveBeenCalledWith(500);
    expect(mockH.response).toHaveBeenCalledWith('error');
    mockGetProductHelper.mockRestore();
  });
});
