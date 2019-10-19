import React, { Component } from "react";
import { Layout, Row, Menu, Dropdown, Icon } from "antd";
import { UserContext } from "../UserProvider";
import ScanBarcode from "./ScanBarcode";
import DaftarPeserta from "./DaftarPeserta";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "scan"
    };
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a
            onClick={() => {
              this.setState({ position: "scan" });
            }}
          >
            Scan Barcode
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a
            onClick={() => {
              this.setState({ position: "daftar" });
            }}
          >
            Data Peserta
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <UserContext.Consumer>
        {context => {
          if (context.level != 1) {
            window.location.href = "#/";
          }
          return (
            <Layout>
              <Row style={{ padding: "75px 50px 0px 50px" }}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a className="ant-dropdown-link" href="#">
                    Actions <Icon type="down" />
                  </a>
                </Dropdown>
              </Row>
              <Row style={{ padding: "0px 50px" }}>
                {this.state.position == "scan" && <ScanBarcode />}
                {this.state.position == "daftar" && <DaftarPeserta />}
              </Row>
            </Layout>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
