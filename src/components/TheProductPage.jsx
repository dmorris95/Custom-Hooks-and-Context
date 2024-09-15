import { useInventory } from "../hooks/useInventory";
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import { Container, Row, Col } from "react-bootstrap"

const TheProductPage = () => {
    const {products, addProduct, removeProduct } = useInventory();
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2>The Product Page</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProductList products={products} removeProduct={removeProduct} />
                </Col>
                <Col>
                    <NewProductForm addProduct={addProduct} products={products} />
                </Col>
            </Row>
            
            
            
        </Container>
    )
};

export default TheProductPage