const axios = require('axios');
const { addProducts } = require('../../src/helpers/addAndGetProducts');
const url = require('../../src/constants/url');
const db = require('../../models');

describe('The add product hepler', () => {
  it('should query the external api for products', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockImplementation(() => Promise.resolve(
      { data: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    ));
    const mockDBCreate = jest.spyOn(db.products, 'create');
    mockDBCreate.mockResolvedValue(true);
    await addProducts();
    expect(mockAxios).toHaveBeenCalledWith(url);
    expect(mockAxios).toHaveBeenCalledTimes(4);
    mockAxios.mockReset();
    mockDBCreate.mockReset();
  });
  it('should add the products into database', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockImplementation(() => Promise.resolve(
      { data: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    ));
    const mockDB = jest.spyOn(db.products, 'create');
    mockDB.mockResolvedValue(true);
    await addProducts();
    expect(mockDB).toHaveBeenCalledTimes(3);
    mockAxios.mockReset();
    mockDB.mockReset();
  });
});
