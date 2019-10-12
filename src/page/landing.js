import React, { Component } from "react";
import { Layout, Carousel, Row, Col, Button, Card } from "antd";
import { Link } from "react-router-dom";
import Img from "react-image";
import "./css/landing.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  render() {
    const { Meta } = Card;
    return (
      <Layout>
        <Row>
          <div className="slider-font">
            <h1
              style={{
                color: "white",
                fontSize: "xx-large",
                fontFamily: "GothamUltra"
              }}
            >
              Filafest 2019
            </h1>
            <p>
              Filafest atau Filkom Anniversary Festival adalah acara tahunan
              yang diadakan oleh Fakulas Ilmu Komputer Universitas Brawijaya
              dalam rangka memperingati dan merayakan diesnatalis fakultas.
              Acara ini dikemas dalam dua rangkaian, yaitu jalan sehat dan malam
              puncak
            </p>
          </div>
          <Carousel autoplay style={{ height: "100%" }}>
            <div>
              <Img className="slider" src="./asset/slider1.JPG" />
            </div>
            <div>
              <Img className="slider" src="./asset/slider2.JPG" />
            </div>
            <div>
              <Img className="slider" src="./asset/slider3.JPG" />
            </div>
          </Carousel>
        </Row>
        <Row style={{ padding: "50px 50px" }} id={"tiket"}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large"
            }}
          >
            COMING EVENTS
          </h1>
          <hr
            style={{ border: "1px solid red", width: 150, marginTop: "-8px" }}
          />
        </Row>
        <Row
          style={{ padding: "0 50px", marginBottom: "25px" }}
          gutter={24}
          justify="center"
        >
          <Col lg={12} style={{ padding: "0px 5px" }}>
            <Img src="./asset/slider1.JPG" className="img-sehat" />
          </Col>
          <Col lg={12} style={{ padding: "0px 30px" }}>
            <h1 className="title-sehat">
              <div style={{ color: "red", margin: 0, padding: 0 }}>
                JALAN SEHAT
              </div>
              <div
                style={{
                  color: "#FFA200",
                  margin: 0,
                  padding: 0,
                  marginTop: "-12.5px"
                }}
              >
                20 November 2019
              </div>
            </h1>
            <div className="isi-sehat">
              Jalan Sehat adalah rangkaian pertama FILAFEST yang diikuti oleh
              seluruh civitas yang ada di FILKOM. Jalan sehat ini merupakan
              acara jalan bersama mengintari wilayah Universitas Brawijaya dan
              pada tahun ini sekaligus merayakan peresmian gedung baru FILKOM
              yaitu gedung G. Tidak hanya jalan bersama, pada rangkaian ini akan
              terdapat banyak penampilan dari mahasiswa, dosen, ataupun civitas
              lainnya
            </div>
            <br />
            <Link to={"/chooseTicket"}>
              <Button className="btn-sehat">{"Cetak Tiket"}</Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ padding: "0 50px" }} justify="center" gutter={24}>
          <Col lg={12} style={{ padding: "0px 30px" }}>
            <Row>
              <h1 className="title-puncak">
                <div style={{ color: "red", margin: 0, padding: 0 }}>
                  Malam Puncak
                </div>
                <div
                  style={{
                    color: "#FFA200",
                    margin: 0,
                    padding: 0,
                    marginTop: "-12.5px"
                  }}
                >
                  1 Desember 2019
                </div>
              </h1>
              <div className="isi-puncak">
                Malam puncak adalah rangkaian kedua dari FILAFEST dan menjadi
                puncaknya acara diesnatalis FILKOM. Malam puncak adalah
                rangkaian acara bertajuk music event mendatangkan guest star
                dari FILKOM, lokal, sampai nasional. Tema dan konsep tentunya
                akan lebih spektakuler dari tahun ke tahun. Rangkaian malam
                puncak ini dapat menjadi momentum rasa syukur bagi FILKOM
                sehingga tetap memperlihatkan kebersamaan civitas akademika
                FILKOM secara luas dan general.
              </div>
            </Row>
            <Row>
              <Link to={"/chooseTicket"}>
                <Button className="btn-puncak">{"Cetak Tiket"}</Button>
              </Link>
            </Row>
          </Col>
          <Col lg={12} style={{ padding: "0px 5px" }}>
            <Img src="./asset/slider3.JPG" className="img-puncak" />
          </Col>
        </Row>
        <Row style={{ padding: "50px 50px" }} id={"informasi"}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "x-large"
            }}
          >
            LATEST NEWS
          </h1>

          <hr
            style={{ border: "1px solid red", width: 150, marginTop: "-8px" }}
          />
        </Row>
        <Row type="flex" justify="center" gutter={16}>
          {this.state.news.length == 0 && (
            <h1 style={{ textAlign: "center" }}>No Post</h1>
          )}
          {this.state.news.length != 0 &&
            this.state.news.map(data => {
              return (
                <Col xs={{ span: 16 }} lg={{ span: 6, offset: 1 }}>
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
              );
            })}
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
