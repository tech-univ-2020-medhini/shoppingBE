const { getCart } = require('../../src/helpers/getAndUpdateCart');
const db = require('../../models');

const { gt } = db.Sequelize.Op;

describe('the get cart helper', () => {
  it('should return the cart value of the user', async () => {
    const mockDb = jest.spyOn(db.products, 'findAll');
    mockDb.mockResolvedValue(true);
    await getCart();
    expect(mockDb).toHaveBeenCalledWith({
      where: {
        cart: {
          [gt]: 0,
        },
      },
    });
    mockDb.mockReset();
  });
});
