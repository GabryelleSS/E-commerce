import React from 'react';
import { List } from 'antd';
import Product from '../Product';

const ProductsList = ({ products }) => (
  <List
    dataSource={products}
    locale={{ emptyText: 'Não há produtos' }}
    grid={{ gutter: 16, column: 4 }}
    renderItem={(product, i) => (
      <List.Item>
        <Product key={i} product={product} />
      </List.Item>
    )}>
  </List>
);

export default ProductsList;