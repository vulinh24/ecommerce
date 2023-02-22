const initCart = {
    prods: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartReducer = (cart, action) => {
    const newProd = action;
    const isExistProd = cart.prods.find(item => item.id === newProd.id);
    if (!isExistProd) {
        cart.prods.push(
            {
                id: newProd.id,
                title: newProd.title,
                image: newProd.image,
                price: Number(newProd.price),
                quantity: Number(newProd.quantity)
            }
        )
        cart.totalAmount = cart.totalAmount + Number(Number(newProd.quantity) * Number(newProd.price))
        cart.totalQuantity = cart.totalQuantity + Number(newProd.quantity) 
    } else {
        isExistProd.quantity = isExistProd.quantity + Number(newProd.quantity);
        cart.totalQuantity = cart.totalQuantity + Number(newProd.quantity);
        cart.totalAmount = cart.totalAmount + (Number(newProd.quantity) * Number(isExistProd.price))
    }
    return {...cart};
}

export { initCart, cartReducer }