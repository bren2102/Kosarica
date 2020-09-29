import React from 'react';
import axios from 'axios';
import Product from './product';

class ListProducts extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    axios.get('products.json')
      .then(data => {
        this.setState({
          items: data.data.products,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="listOfProducts">
        { items.map(
          item => (
            <Product
              id={item.id}
              name={item.name}
              image={item.image}
              amount={item.price.amount}
              currency={item.price.currency}
              measureUnit={item.price.measureUnit}
              key={item.id}
            />
          ),
        )}
      </div>
    );
  }
}

export default ListProducts;
