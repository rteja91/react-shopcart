import React, { Component } from 'react';

import Header from '../../components/Header/Header';

import ProductList from '../Products/ProductList';
import FooterPage from '../../components/Footer/Footer';

import ModalPage from '../../components/Cart/CartModal';

class Layout extends Component {
    state = {
        showCart: false,
        cartInfo: {
            pdtCount: 0,
            pdts: []
        }

    }
    cancelhandler = () => {
        this.setState({ showCart: false });
    }

    viewCarthandler = () => {
        this.setState({ showCart: true });
    }



    handleAddtoCart = (pdtObj) => {
        //console.log(pdtObj);
        let newCartInfo = this.state.cartInfo;
        let pdtInfotoadd = {
            id: pdtObj.id,
            pdtinfo: pdtObj,
            count: 1
        }
        const objIndex = newCartInfo.pdts.findIndex((obj => obj.id === pdtObj.id));
        if(objIndex > -1){
            newCartInfo.pdts[objIndex].count++ ;
        } else {
            newCartInfo.pdts.push(pdtInfotoadd);
        }
        newCartInfo.pdtCount = newCartInfo.pdts.length;
        //console.log(newCartInfo.pdts);
        this.setState({ cartInfo: newCartInfo });

    }

    handleRemovefromCart = (pdtObj) => {
        let altCartinfo = this.state.cartInfo;
        const oldobjIndex = altCartinfo.pdts.findIndex((obj => obj.id === pdtObj.id));
        //console.log(oldobjIndex);
        if(oldobjIndex > -1){
            if(altCartinfo.pdts[oldobjIndex].count > 1){
                altCartinfo.pdts[oldobjIndex].count--;
            } else {
                altCartinfo.pdts = altCartinfo.pdts.filter(pdt => pdt.id !== pdtObj.id);
                altCartinfo.pdtCount = altCartinfo.pdts.length;
            }
            
        } else {
            altCartinfo.pdts = altCartinfo.pdts.filter(pdt => pdt.id !== pdtObj.id);
            altCartinfo.pdtCount = altCartinfo.pdts.length;
        }
        
        this.setState({ cartInfo: altCartinfo });
    }

    handlePdtCountChange = (pdtObj, event) => {
        if(pdtObj.count > event.target.value){
           this.handleRemovefromCart(pdtObj);

        } else if(pdtObj.count < event.target.value) {
            this.handleAddtoCart(pdtObj)
        }
    }

    render() {

        return (
            <div>
                <Header clickviewCart={this.viewCarthandler} modalClosed={this.cancelhandler} cartInfo={this.state.cartInfo} />
                <div className="container-fluid" style={{ marginTop: "70px" }}>
                    <ProductList addtoCart={this.handleAddtoCart} />
                </div>
                <FooterPage />
                <ModalPage
                    show={this.state.showCart}
                    modalClosed={this.cancelhandler}
                    cartInfo={this.state.cartInfo}
                    removefromCart={this.handleRemovefromCart}
                    handlePdtCountChange={this.handlePdtCountChange} >
                    

                </ModalPage>
            </div>
        );
    }
}

export default Layout; 