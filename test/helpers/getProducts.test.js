const { getProducts } = require('../../src/helpers/addAndGetProducts');
const db = require('../../models');

describe('the get products helper', () => {
  it('should retrive all the products from the database', async () => {
    const mockDB = jest.spyOn(db.products, 'findAll');
    mockDB.mockResolvedValue([{}, {}]);
    const result = await getProducts();
    expect(result).toEqual([{}, {}]);
  });
  it('should return false when no products are returned', async () => {
    const mockDB = jest.spyOn(db.products, 'findAll');
    mockDB.mockResolvedValue([]);
    const result = await getProducts();
    expect(result).toBe(false);
  });
});
