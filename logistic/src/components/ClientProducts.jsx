import React from 'react';
import styled from 'styled-components';
import ReactSearchBox from 'react-search-box'

const StyledBody = styled.div`
  background-color: grey;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export default class ClientProducts extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            products: []
        }

        this.getProducts = this.getProducts.bind(this)
    }
    
    componentDidMount(){
        this.getProducts()
    }
    
    getProducts(){
        const url = "http://localhost:3000/api/v1/products/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("There was an error getting the products data");
            })
            .then(response => this.setState({ products: response }))
            .catch(() => this.props.history.push("/products"));
            // console.log(this.state.products, 'the products')
    }

    render(){
        const { products } = this.state;
        console.log(products, 'the producties')
        let allProducts = products.map((product, index) => (
            <div key={index}>
                <p><b>{product.name}</b></p>
                <p>{product.description}</p>
                <p><b>{product.total_supply}</b></p>
                <p>{product.location}</p>
        </div> ));
        return(
            <StyledBody>
                <div className="products-container">
                    <h1 style={{textAlign: 'center'}}>Company 1</h1>
                    <ReactSearchBox
                        style={{width: '70%'}}
                        placeholder="Search Products"
                    />
                    <div id="product-list">
                        {products.length > 0 ? allProducts : null }
                    </div>
                </div>
            </StyledBody>
        )
    }
}