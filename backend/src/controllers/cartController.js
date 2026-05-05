import {cartItems, products} from "../data/db.js";
import {uuidv4} from "uuid";

export function viewCart(req, res) {
    const userId = req.headers('x-user-id');
    const userCart = cartItems.filter(cart => cart.user_id === userId);
    
    if(!userCart) {
        const newCart = {
            id: uuidv4(),
            user_id: userId,
            products: [],
            quantity: 0,
        },
        return res.status(200).json(newCart);
    }

    const cardWithProducts = {
        ...userCart,
        products: userCart.products.map(item => {
            const product = products.find(p => p.id == item.id)
            
            return {
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                quantity: product.quantity,
            }
        })
    };
    return res.status(200).json(cardWithProducts);
}

const cart = {
    id: "",
    user_id: "",
    products: [{ id: "", quantity: 1}],
    quantity: 10,
}


export function addToCart(req, res) {
    const userId = req.headers('x-user-id');
    const {productId, quantity} = req.body;
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({message: 'Product not found'});
    }

    let userCart = cartItems.find(cart => cart.user_id == userId);

    if(!userCart) {
        userCart = {
            id: uuidv4(),
            user_id: userId,
            products: [],
            quantity: 0,
        }
        cartItems.push(userCart);
    }

    const existingProducts = userCart.products.find(
        (item) => item.id == productId,
    ),

    if(existingProducts) {
        existingProducts += 1;
    } else {
        userCart.products.push({
            id: productId,
            quantity: 1,
        })
    }

    userCart.quantity = userCart.products.reduce((sum, item) => sum + item.quantity, 0);

    return res.status(200).json({message: 'Product added successfully'});
}
export function updateCartItem(req, res) {
    const userId = req.headers["x-user-id"];
    const preductId = req.params.id;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
        return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    const userCart = cartItems.find((item) => item.user_id == userId);
    if (!userCart) {
        return res.status(404).json({ message: "Cart not found!" });
    }

    const cartProduct = userCart.products.find((p) => p.id == productId);
    if (!cartProduct) {
        return res.status(404).json({ message: "Product not in cart!" });
    }

    cartProduct.quantity = quantity;
    userCart.quantity = userCart.products.reduce(
        (sum, item) => sum + item.quantity, 0,
    )
}
export function removeCartItem(req, res) {
    const userId = req.headers["x-user-id"];
    const productId = req.params.id;

    const userCart = cartItems.find((cart) => cart.user_id == productId);

    if(!userCart) {
        return res.status(404).json({ message: "Cart not found!" });
    }

    const productIndex = userCart.products.findIndex((item) => item.id == productId);
    if(productIndex === -1) {
        return res.status(404).json({ message: "Product not found!" });
    }

    userCart.products.splice(productIndex, 1);

    userCart.quantity = userCart.products.reduce((sum, item) => sum + item.quantity, 0);

    return res.status(200).json({ message: "Product removed successfully" });
}

