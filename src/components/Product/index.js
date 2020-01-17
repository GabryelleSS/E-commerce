import React from 'react';
import { Card, Icon } from 'antd';

const Product = () => (
  <Card
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="shopping" key="shopping" />
    ]}
  />
);

export default Product;