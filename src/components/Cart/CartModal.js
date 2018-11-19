import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';



class ModalPage extends Component {
    state = {
        modal: false
    };
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    

    render() {
        return (
            <Container>
                <Modal isOpen={this.props.show} toggle={this.props.modalClosed} size="lg">
                    <ModalHeader toggle={this.props.modalClosed}>
                        Total items: {this.props.cartInfo.pdtCount}
                    </ModalHeader>
                    <ModalBody>

                        <table className="table product-table">
                            <thead className="mdb-color lighten-5">
                                <tr>
                                    <th></th>
                                    <th className="font-weight-bold">
                                        <strong>Product</strong>
                                    </th>
                                    <th></th>
                                    <th className="font-weight-bold">
                                        <strong>Price</strong>
                                    </th>
                                    <th className="font-weight-bold">
                                        <strong>QTY</strong>
                                    </th>
                                    <th className="font-weight-bold">
                                        <strong>Amount</strong>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.cartInfo.pdts.map(pdt => {
                                    return (<tr key={pdt.pdtinfo.id}>
                                        <th scope="row">
                                            <img src={pdt.pdtinfo.pdtImg} alt="" className="img-fluid z-depth-0" style={{ maxHeight: "120px" }} />
                                        </th>
                                        <td>
                                            <h5 className="mt-3">
                                                <strong>{pdt.pdtinfo.pdtName}</strong>
                                            </h5>
                                            <p className="text-muted">{pdt.pdtinfo.pdtCategory}</p>
                                        </td>
                                        <td></td>
                                        <td>{pdt.pdtinfo.pdtPrice}</td>
                                        <td>
                                            <input type="number" defaultValue={pdt.count} aria-label="Search" onChange={(e) => this.props.handlePdtCountChange(pdt, e)} className="form-control" style={{ width: "100px" }} />
                                        </td>
                                        <td className="font-weight-bold">
                                            <strong>{pdt.count * parseInt(pdt.pdtinfo.pdtPrice)}$</strong>
                                        </td>
                                        <td>
                                            <button type="button" onClick={() => this.props.removefromCart(pdt.pdtinfo, true)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">X</button>
                                        </td>
                                    </tr>);
                                })}
                            </tbody>
                        </table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.modalClosed}>Close</Button>
                        <Button color="primary">Save changes</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default ModalPage;