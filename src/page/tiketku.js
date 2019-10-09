import React, { Component } from "react";
import { Layout, Row, Col, Button, Card, List, Typography } from "antd";
import { Link } from "react-router-dom";

export default class Tiiketku extends Component {
  render() {
    const data = [
      'Jalan Sehat',
      'Malam Puncak',
    ];
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
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Link to={"/generateBarcode?item="+item}><Typography.Text mark>[Ticket]</Typography.Text> {item}</Link>
              </List.Item>
            )}
          />
        </Row>
      </Layout>
    );
  }
}
