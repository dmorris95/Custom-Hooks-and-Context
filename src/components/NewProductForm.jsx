import { Form, Button, Container } from 'react-bootstrap';
import { useState } from 'react';

const NewProductForm = ({products, addProduct}) => {
    const [product, setProduct] = useState( {id: 0, name: '', price: ''});
    const [errors, setErrors] = useState({});
    let flag = false;

    const validateForm = () => {
        const errors = {};
        if (!product.id) errors.id = 'Product must have an ID';

        //check for unique ID
        for (let p of products) {
            if (product.id == p.id) flag = true;
        }
        if (flag) errors.id = 'Product must have a unique ID';

        if (!product.name) errors.name = 'Product name is required';
        if (!product.price || product.price <= 0) errors.price = 'Price must be a positive number';
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            addProduct(product);
            setErrors({});
            setProduct({ id: '', name: '', price: ''});
        } else {
            setErrors(errors);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='border border-secondary p-2 rounded'>
                <h3>Add Product</h3>
                <Form.Group controlId='productId'>
                    <Form.Label>Product ID:</Form.Label>
                    <Form.Control type='number' name='id' value={product.id} onChange={handleChange} isInvalid={!!errors.id}/>
                    <Form.Control.Feedback type='invalid'>
                        {errors.id}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='productName'>
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type='text' name='name' value={product.name} onChange={handleChange} isInvalid={!!errors.name}/>
                    <Form.Control.Feedback type='invalid'>
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='productPrice'>
                    <Form.Label>Product Price:</Form.Label>
                    <Form.Control type='text' name='price' value={product.price} onChange={handleChange} isInvalid={!!errors.price}/>
                    <Form.Control.Feedback type='invalid'>
                        {errors.price}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant='success' type='submit' className='mt-3'>
                    Add New Product
                </Button>
            </Form>
        </Container>
    )
};

export default NewProductForm