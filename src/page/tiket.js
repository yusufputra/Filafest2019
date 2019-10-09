import React, { Component } from "react";
import { Layout, Carousel, Row, Col, Button, Card } from "antd";

export default class Tiket extends Component {
  render() {
    const { Meta } = Card;
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
            Choose Ticket
          </h1>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="./asset/slider1.JPG" />}
            >
              <Meta
                title="Jalan Sehat"
                description={
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Button
                      onClick={this.showModal}
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold",
                        float: "right"
                      }}
                    >
                      {"Cetak Tiket"}
                    </Button>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="./asset/slider3.JPG" />}
            >
              <Meta
                title="Malam Puncak"
                description={
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Button
                      onClick={this.showModal}
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold",
                        float: "right"
                      }}
                    >
                      {"Cetak Tiket"}
                    </Button>
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
