const { updateQuantity } = require('../../src/helpers/updateQuantity');
const db = require('../../models');

describe('the update cart helper', () => {
  it('should update the cart value of the user', async () => {
    const mockDb = jest.spyOn(db.products, 'update');
    mockDb.mockResolvedValue(true);
    await updateQuantity(1, 5);
    expect(mockDb).toHaveBeenCalledWith({ quantity: 5, cart: 0 }, {
      where: {
        id: 1,
      },
    });
    mockDb.mockReset();
  });
});
