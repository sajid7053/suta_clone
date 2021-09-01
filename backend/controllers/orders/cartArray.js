const Cart = require('../../models/cartModels');
exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.product",
        select: "name price total"
    });;
    return carts[0];
};
exports.addItem = async payload => {
    const newItem = await Cart.create(payload);
    return newItem
}