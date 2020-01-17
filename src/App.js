import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Cart from './components/Cart';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <h1>Ecommerce</h1>
      </Col>
      <Col span={18}>
        <h2>Produtos</h2>
        <ProductsList products={[1,2,3]} />
      </Col>
      <Col span={6}>
        <h2>Carrinho</h2>
        <Cart />
      </Col>
    </Row>
  );
}

export default App;
