const axios = require('axios');
const { addProducts } = require('../../src/helpers/addAndGetProducts');
const url = require('../../src/constants/url');
const db = require('../../models');
const categories = require('../../src/utils/categoriesJSON');

describe('The add product hepler', () => {
  it('should query the external api for products', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockImplementation(() => Promise.resolve(
      { data: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    ));
    const mockDBCreate = jest.spyOn(db.products, 'bulkCreate');
    mockDBCreate.mockResolvedValue(true);
    const mockWriteCategories = jest.spyOn(categories, 'writeCategories');
    mockWriteCategories.mockResolvedValue(true);
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
    const mockDB = jest.spyOn(db.products, 'bulkCreate');
    mockDB.mockResolvedValue(true);
    const mockWriteCategories = jest.spyOn(categories, 'writeCategories');
    mockWriteCategories.mockResolvedValue(true);
    await addProducts();
    expect(mockDB).toHaveBeenCalledWith(
      [{ id: 1, category: undefined, cart: 0 },
        { id: 2, category: undefined, cart: 0 },
        { id: 3, category: undefined, cart: 0 }],
    );
    mockAxios.mockReset();
    mockDB.mockReset();
  });
  it('should call the write categories handler to store the categories', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockImplementation(() => Promise.resolve(
      { data: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    ));
    const mockDBCreate = jest.spyOn(db.products, 'bulkCreate');
    mockDBCreate.mockResolvedValue(true);
    const mockWriteCategories = jest.spyOn(categories, 'writeCategories');
    mockWriteCategories.mockResolvedValue(true);
    await addProducts();
    expect(mockWriteCategories).toHaveBeenCalled();
  });
});
