const initCart = {
    prods: [],
    totalAmount: Number(0),
    totalQuantity: Number(0)
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
        if (Number(newProd.quantity) + isExistProd.quantity === 0) {
            cart.prods = cart.prods.filter(item => item !== isExistProd)
            cart.totalQuantity = cart.totalQuantity + Number(newProd.quantity);
            cart.totalAmount = cart.totalAmount + (Number(newProd.quantity) * Number(isExistProd.price))
        }
        else {
            isExistProd.quantity = isExistProd.quantity + Number(newProd.quantity);
            cart.totalQuantity = cart.totalQuantity + Number(newProd.quantity);
            cart.totalAmount = cart.totalAmount + (Number(newProd.quantity) * Number(isExistProd.price))
        }
    }
    return {...cart};
}

export { initCart, cartReducer }