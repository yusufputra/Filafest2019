import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Layout, Row } from "antd";
import Axios from "axios";

export default class ScanBarcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: undefined
    };
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: "Loading...",
        loading: true
      });
      const dataa = JSON.parse(data);
      Axios.post(
        "https://backend-bem.herokuapp.com/api/web/protected/scanTicket",
        dataa,
        {
          headers: {
            authorization: "bearer " + localStorage.token
          }
        }
      )
        .then(ress => {
          if (ress.data.status === true) {
            alert(
              "Tiket Valid! " +
                ress.data.value[0].nama +
                " " +
                ress.data.value[0].nim +
                " " +
                ress.data.value[0].jenisTiket
            );
            this.setState({
              result: "",
              loading: false
            });
          } else {
            alert("Tiket tidak valid!");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <Layout>
        <Row style={{ padding: "0px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "xx-large"
            }}
          >
            Scan QR Code
          </h1>
          <hr
            style={{
              border: "1px solid red",
              width: 150,
              marginTop: "-10px"
            }}
          />
        </Row>
        <Row style={{ padding: "0px 50px" }}>
          {this.state.loading === false && (
            <QrReader
              delay={100}
              ref="qrReader1"
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />
          )}
          <p>{this.state.result}</p>
        </Row>
      </Layout>
    );
  }
}
