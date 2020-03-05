const { updateCart } = require('../../src/helpers/getAndUpdateCart');
const db = require('../../models');

describe('the update cart helper', () => {
  it('should update the cart value of the user', async () => {
    const mockDb = jest.spyOn(db.products, 'update');
    mockDb.mockResolvedValue(true);
    await updateCart(1);
    expect(mockDb).toHaveBeenCalledWith({ cart: db.sequelize.literal('field + 1') }, {
      where: {
        id: 1,
      },
    });
    mockDb.mockReset();
  });
});
