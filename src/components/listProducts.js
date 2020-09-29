import React from 'react';
import Product from './product';
import axios from 'axios';

class ListProducts extends React.Component {
  state = {
    items: [],
    price: []
  }
  componentDidMount() {
    axios.get('products.json')
    .then(data => {
      this.setState({
        items: data.data.products,
      })
    })
  }

  render() {
    const { items } = this.state
    return(
      <div className='listOfProducts'>
        { items.map(
            item => (
              <Product
                name={item.name}
                image={item.image}
                amount={item.price.amount}
                currency={item.price.currency}
                measureUnit={item.price.measureUnit}
                key={item.id}
              />
          ))
        }
      </div>
    )
  }
}

export default ListProducts