import React, { Component } from "react";
import { Layout, Carousel, Row, Col, Button, Card } from "antd";
import Img from "react-image";
import "./css/landing.css";

export default class Landing extends Component {
  render() {
    const { Meta } = Card;
    return (
      <Layout>
        <Row>
          <Carousel autoplay style={{ height: "100%" }}>
            <div>
              <p className="slider-font">Filafest 2019</p>
              <Img className="slider" src="/asset/slider1.JPG" />
            </div>
            <div>
              <p className="slider-font">FILKOM</p>
              <Img className="slider" src="/asset/slider2.JPG" />
            </div>
            <div>
              <p className="slider-font">Universitas Brawijaya</p>
              <Img className="slider" src="/asset/slider3.JPG" />
            </div>
          </Carousel>
        </Row>
        <Row style={{ padding: "50px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large",
              textDecoration: "underline"
            }}
          >
            COMING EVENTS
          </h1>
        </Row>
        <Row style={{ padding: "0 50px" }}>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <Img
              src="/asset/slider1.JPG"
              style={{ width: "100%", float: "right" }}
            />
          </Col>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <h1
              style={{
                fontSize: "xx-large"
              }}
            >
              <span style={{ color: "red" }}>JALAN SEHAT</span>
              <br />
              <span style={{ color: "#FFA200" }}>TANGGAL ACARA</span>
            </h1>
            <p>
              aslkdjaslkdjalskdjalksjdalksjdalsjdlaskd alskdja lskdjasdjadkjask
              djasl djaslk jalskd jalsdja lksjd laksjd
            </p>
            <br />
            <Button
              onClick={this.showModal}
              style={{
                borderRadius: "20px",
                backgroundColor: "red",
                color: "white",
                fontWeight: "bold",
                float: "left"
              }}
            >
              {"Cetak Tiket"}
            </Button>
          </Col>
        </Row>
        <Row style={{ padding: "0 50px" }} justify="center">
          <Col span={12} style={{ padding: "0px 5px" }}>
            <div style={{ width: "100%" }}>
              <h1
                style={{
                  fontSize: "xx-large",
                  float: "right"
                }}
              >
                <span style={{ color: "red" }}>JALAN SEHAT</span>
                <br />
                <span style={{ color: "#FFA200" }}>TANGGAL ACARA</span>
              </h1>
            </div>
            <div style={{ float: "right", width: "100%" }}>
              aslkdjaslkdjalskdjalksjdalksjdalsjdlaskd alskdja lskdjasdjadkjask
              djasl djaslk jalskd jalsdja lksjd laksjd
            </div>
            <br />
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
          </Col>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <Img
              src="/asset/slider1.JPG"
              style={{ width: "100%", float: "right" }}
            />
          </Col>
        </Row>
        <Row style={{ padding: "50px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large",
              textDecoration: "underline"
            }}
          >
            LAST NEWS
          </h1>
        </Row>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}
