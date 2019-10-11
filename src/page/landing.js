import React, { Component } from "react";
import { Layout, Carousel, Row, Col, Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
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
              <div className="slider-font">
                <p>Filafest 2019</p>
                <hr style={{ border: "1px solid red", width: 150 }} />
              </div>
              <Img className="slider" src="./asset/slider1.JPG" />
            </div>
            <div>
              <p className="slider-font">FILKOM</p>
              <Img className="slider" src="./asset/slider2.JPG" />
            </div>
            <div>
              <p className="slider-font">Universitas Brawijaya</p>
              <Img className="slider" src="./asset/slider3.JPG" />
            </div>
          </Carousel>
        </Row>
        <Row style={{ padding: "50px 50px" }} id={"tiket"}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large",
            }}
          >
            COMING EVENTS
          </h1>
          <hr style={{ border: "1px solid red", width: 150, marginTop: "-8px" }} />
        </Row>
        <Row style={{ padding: "0 50px", marginBottom: "25px" }}>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <Img
              src="./asset/slider1.JPG"
              style={{ width: "80%", float: "right", borderRadius: "7.5%" }}
            />
          </Col>
          <Col span={12} style={{ padding: "0px 30px" }}>
            <h1
              style={{
                fontSize: "xx-large"
              }}
            >
              <div style={{ color: "red", margin: 0, padding: 0 }}>JALAN SEHAT</div>
              <div style={{ color: "#FFA200", margin: 0, padding: 0, marginTop: "-12.5px" }}>TANGGAL ACARA</div>
            </h1>
            <div style={{ width: "80%" }}>
              Jalan Sehat adalah rangkaian pertama FILAFEST yang diikuti oleh seluruh civitas yang ada di FILKOM. Jalan sehat ini merupakan acara jalan bersama mengintari wilayah Universitas Brawijaya dan pada tahun ini sekaligus merayakan peresmian gedung baru FILKOM yaitu gedung G. Tidak hanya jalan bersama, pada rangkaian ini akan terdapat banyak penampilan dari mahasiswa, dosen, ataupun civitas lainnya
            </div>
            <br />
            <Link to={"/chooseTicket?id=id"}>
              <Button
                onClick={this.showModal}
                style={{
                  marginTop: "10px",
                  borderRadius: "20px",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  float: "left"
                }}
              >
                {"Cetak Tiket"}
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ padding: "0 50px" }} justify="center">
          <Col span={12} style={{ padding: "0px 30px" }}>
            <div style={{ width: "100%" }}>
              <h1
                style={{
                  fontSize: "xx-large",
                  float: "right"
                }}
              >
                <div style={{ color: "red", margin: 0, padding: 0 }}>JALAN SEHAT</div>
                <div style={{ color: "#FFA200", margin: 0, padding: 0, marginTop: "-12.5px" }}>TANGGAL ACARA</div>
              </h1>
            </div>
            <div style={{ float: "right", width: "80%" }}>
              Malam puncak adalah rangkaian kedua dari FILAFEST dan menjadi puncaknya acara diesnatalis FILKOM. Malam puncak adalah rangkaian acara bertajuk music event mendatangkan guest star dari FILKOM, lokal, sampai nasional. Tema dan konsep tentunya akan lebih spektakuler dari tahun ke tahun. Rangkaian malam puncak ini dapat menjadi momentum rasa syukur bagi FILKOM sehingga tetap memperlihatkan kebersamaan civitas akademika FILKOM secara luas dan general.
            </div>
            <br />
            <Link to={"/chooseTicket?id=id"}>
              <Button
                onClick={this.showModal}
                style={{
                  marginTop: "10px",
                  borderRadius: "20px",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  float: "right"
                }}
              >
                {"Cetak Tiket"}
              </Button>
            </Link>
          </Col>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <Img
              src="./asset/slider1.JPG"
              style={{ width: "80%", float: "left", borderRadius: "7.5%" }}
            />
          </Col>
        </Row>
        <Row style={{ padding: "50px 50px" }} id={"informasi"}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large",
            }}
          >
            LATEST NEWS
          </h1>

          <hr style={{ border: "1px solid red", width: 150, marginTop: "-8px" }} />
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
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
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
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
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
        <Row
          style={{
            padding: "10px 0px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Link to={"/news"}>
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
              {"Lebih Banyak"}
            </Button>
          </Link>
        </Row>
      </Layout>
    );
  }
}
