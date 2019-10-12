import React, { Component } from "react";
import { Layout, Row, Col, Button, Card, List, Typography } from "antd";
import QRCode from "qrcode-react";
import { UserContext } from "../UserProvider";

export default class Barcode extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => {
          if (context.loggedIn == false) {
            window.location.href = "#/";
          }
          const data = {
            jenis : localStorage.kind,
            nim : context.nim
          }
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
                    textAlign: "center"
                  }}
                >
                  <QRCode value={data} />
                </div>
              </Row>
            </Layout>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
