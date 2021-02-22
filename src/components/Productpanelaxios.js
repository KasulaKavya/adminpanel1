import React, { Component } from 'react';
import axios from 'axios';

class Productpanelaxios extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      title: '',
      sellerNumber: '',
      description: '',
      price: '',
      discount: '',
      inventory: '',
      species: '',
      category: '',
      productId: '',
      plusPoints: '',
      brand: '',
      image: null
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('sellerNumber', this.state.sellerNumber);
    form_data.append('description', this.state.description);
    form_data.append('price', this.state.price);
    form_data.append('discount', this.state.discount);
    form_data.append('inventory', this.state.inventory);
    form_data.append('species', this.state.species);
    form_data.append('category', this.state.category);
    form_data.append('productId', this.state.productId);
    form_data.append('plusPoints', this.state.plusPoints);
    form_data.append('brand', this.state.brand);

    let url = 'https://petswonder.co.in/petswonder/api/productUpload/saveProduct?title=&sellerNumber=&description=&price=&discount=&inventory=&species=&category=&productId=&plusPoints=&brand=${}';
    
    axios.post(url, form_data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App product-container apis-data">
        <div className="panel-border overflow">
          <form onSubmit={this.handleSubmit}>
            <p>
              <input type="text" className="input-txt" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
            </p>
            <p>
              <input type="text" className="input-txt" placeholder='sellerNumber' id='sellerNumber' value={this.state.sellerNumber} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='description' id='description' value={this.state.description} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='price' id='price' value={this.state.price} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='discount' id='discount' value={this.state.discount} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='inventory' id='inventory' value={this.state.inventory} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='species' id='species' value={this.state.species} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='category' id='category' value={this.state.category} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='productId' id='productId' value={this.state.productId} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='plusPoints' id='plusPoints' value={this.state.plusPoints} onChange={this.handleChange} required/>

            </p>
            <p>
              <input type="text" className="input-txt" placeholder='brand' id='brand' value={this.state.brand} onChange={this.handleChange} required/>

            </p>

            
            <p>
              <input type="file"
                    id="image"
                    accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
            </p>
            <input type="submit"/>
          </form>
        </div>

      </div>
    );
  }
}

export default Productpanelaxios;