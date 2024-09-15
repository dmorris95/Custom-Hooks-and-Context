import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";


const ProductList = ({ products, removeProduct }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Products</h3>
                    <ListGroup>
                        {products.map(product => (
                            <ListGroup.Item key={product.id} className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded">
                                {product.id}
                                Product Name: {product.name} -- Price: ${product.price}
                                <div>
                                    <Button size="sm" variant="danger" onClick={() => removeProduct(product.id)}>Delete</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default ProductList;