import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, Col, CardFooter, Button, Fa } from 'mdbreact';

class ProductItem extends Component {
    render() {
        return (
            <Col>
                <Card narrow ecommerce className="mb-2" style={{ width: "16rem", marginTop: "20px" }}>
                    <CardImage cascade top src={this.props.pdtinfo.pdtImg} alt="sample photo" />
                    <CardBody cascade>
                        <a href="/" className="text-muted">
                            <h5>{this.props.pdtinfo.pdtCategory}</h5>
                        </a>
                        <CardTitle><strong><a href="/">{this.props.pdtinfo.pdtName}</a></strong></CardTitle>
                        <CardText>{this.props.pdtinfo.PdtShrtDesc}</CardText>
                        <CardFooter className="px-1 pt-0 pb-0">
                            <span className="float-left mt-3"><strong>{this.props.pdtinfo.pdtPrice}</strong></span>
                            <span className="float-right mt-2">
                                <Button color="primary" size="sm" onClick={() => this.props.addtoCart(this.props.pdtinfo)}><Fa icon="shopping-cart" className="mr-1" />Add to cart</Button>
                            </span>
                        </CardFooter>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default ProductItem;