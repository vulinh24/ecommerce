const initCart = {
    prods: [],
    totalAmount: Number(0),
    totalQuantity: Number(0)
}

export const initCartFromLocalStorage = () => {
    const json = localStorage.getItem('cart');
    if (json === null) return initCart;
    else return JSON.parse(localStorage.getItem('cart'))
}

const cartReducer = (cart, action) => {
    switch (action.type) {
        case 'addCart':
            return addToCart(cart, action.payload)
        case 'checkout':
            return checkout()

        default: throw new Error('invalid type')
    }
}

const checkout = () => {
    localStorage.setItem('cart', JSON.stringify(initCart))
    return {
        prods: [],
        totalAmount: Number(0),
        totalQuantity: Number(0)
    };
}

const addToCart = (cart, newProd) => {
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
            const newAmount = cart.totalAmount + (Number(newProd.quantity) * Number(isExistProd.price));
            cart.totalAmount = newAmount < 0.01 ? 0 : newAmount;
        }
        else {
            isExistProd.quantity = isExistProd.quantity + Number(newProd.quantity);
            cart.totalQuantity = cart.totalQuantity + Number(newProd.quantity);
            const newAmount = cart.totalAmount + (Number(newProd.quantity) * Number(isExistProd.price));
            cart.totalAmount = newAmount < 0.01 ? 0 : newAmount;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    return { ...cart };
}

export { initCart, cartReducer }