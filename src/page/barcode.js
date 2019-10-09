import React, { Component } from "react";
import { Layout, Row, Col, Button, Card, List, Typography } from "antd";
import QRCode from "qrcode-react";
export default class Barcode extends Component {
  render() {
      console.log(this.props.context)
    return (
      <Layout>
        <Row style={{ padding: "75px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "xx-large",
              textDecoration: "underline"
            }}
          >
            Scan Me!
          </h1>

          <div
            style={{
              textAlign: "center",
            }}
          >
              <QRCode value={"halo"}/>
          </div>
        </Row>
      </Layout>
    );
  }
}
