import React, { Component } from "react";
import { Layout, Row, message, List, Typography } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../UserProvider";

export default class Tiiketku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    message.loading("Fetching your data..").then(() => {
      Axios.post(
        "https://backend-bem.herokuapp.com/api/web/protected/getOwnTiket",
        {},
        {
          headers: {
            authorization: "bearer " + localStorage.token
          }
        }
      ).then(ress => {
        console.log(ress);
        if (ress.status == 200) {
          message.success("Loading finished", 2.5);
          this.setState({ data: ress.data.value });
        } else {
          message.error("Error. Hubungi Panitia", 2.5);
        }
      });
    });
  }
  render() {
    return (
      <UserContext.Consumer>
        {context => {
          if (context.loggedIn == false) {
            window.location.href = "#/";
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
                  Tiketku
                </h1>
                <List
                  bordered
                  dataSource={this.state.data}
                  renderItem={item => (
                    <List.Item>
                      <Link
                        to={"/generateBarcode"}
                        onClick={() => {
                          localStorage.kind = item.jenisTiket;
                        }}
                      >
                        <Typography.Text mark>[Ticket]</Typography.Text>{" "}
                        {(item.jenisTiket == "jalansehat2019" &&
                          "Jalan Sehat") ||
                          (item.jenisTiket == "malampuncak2019" &&
                            "Malam Puncak")}
                      </Link>
                    </List.Item>
                  )}
                />
              </Row>
            </Layout>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
