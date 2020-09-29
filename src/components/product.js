import React from 'react'
import axios from 'axios'

class Product extends React.Component{
  state = {
    name:'',
  }
  componentDidMount() {
    axios.get('../products.json')
    .then(data => {
      console.log(data.data)
    })
  }
  render(){
    return( 
    <div className="product">

    </div>
    )
  }
}

export default Product