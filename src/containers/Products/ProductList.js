import React, { Component } from 'react';

import { Row } from 'mdbreact';

import ProductItem from '../../components/Product/Product';
import axios from '../../network/BaseAxios';

class ProductList extends Component {

    state = {
        products: [],
        loading: false,
        error: false,
        hasMore: true,

    }

    loadProaducts() {

        const startAt = this.state.products.length;
        //console.log(startAt);
        const endAt = startAt > 0 ? startAt + 8 : 7;
        //console.log(endAt);
        this.setState({ loading: true })
        axios.get('/products.json?orderBy="id"&endAt=' + endAt + '&startAt=' + startAt)
            .then(response => {
                //console.log(response.data);
                const moreProds = Object.values(response.data)
                if (moreProds.length > 0) {
                    this.setState({ products: [...this.state.products, ...moreProds], loading: false });
                    if (moreProds.length < 8) {
                        this.setState({ hasMore: false });
                    }
                } else {
                    this.setState({ hasMore: false });
                }

            }).catch(error => {
                this.setState({ error: true });
            });
    }
    componentDidMount() {
        this.loadProaducts();
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.state.products.length && !this.state.loading
        ) {

            if (this.state.hasMore) {
                this.loadProaducts();
            }
        }
    }

    getProductInfo = (id) => {
        return this.state.products[id];
    }

    render() {

        const products = this.state.products;

        return (
            <Row>
                {products.map(pdt => {
                    return <ProductItem
                        key={pdt.id}
                        pdtinfo={pdt}
                        addtoCart={this.props.addtoCart}
                        getProduct={this.getProductInfo}
                    />
                })

                }

            </Row>
        );
    }
}

export default ProductList;
