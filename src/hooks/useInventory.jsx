import { useState, useEffect } from "react";

export const useInventory = () => {

    const [products, setProducts] = useState([]);

    //Set Products
   useEffect(() => {
        //Simulate an API call
        const fetchProducts = async () => {
            try {
                const dummyData = [
                {id: 1, name: "Laptop", price: "239.59"},
                {id: 2, name: "TV", price: "269.99"},
                {id: 3, name: "Chair", price: "54.99"},
                {id: 4, name: "Table", price: "304.49"}];

                setProducts(dummyData);
            } catch (error) {
                console.error('Error fetching the products: ', error);
            }
        };
    fetchProducts();

    }, []);

    // Add Product
    const addProduct = (newProd) => {
        setProducts((existProducts) => [...existProducts, newProd]);
        console.log(products)
    };

    // Delete a Product
    const removeProduct = (prodId) => {
        setProducts((existProducts) => existProducts.filter((prod) => prod.id !== prodId))
        console.log(products)
    };

    return { products, addProduct, removeProduct };
};
