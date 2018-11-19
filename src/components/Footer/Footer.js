import React, { Component } from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends Component {
    render() {
        return (
            <Footer color="secondary-color" className="font-small mt-4">
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="/"> ShoppingCart </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;