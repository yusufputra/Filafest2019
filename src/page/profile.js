import React, { Component } from "react";
import { Layout, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Img from "react-image";

export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <Row style={{ padding: "75px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "xx-large"
            }}
          >
            Filafest 2019
          </h1>
          <hr
            style={{ border: "1px solid red", width: 150, marginTop: "-10px" }}
          />
        </Row>
        <Row style={{ padding: "0 20%", marginBottom: "25px" }}>
          <p style={{textAlign:'center'}}>
            Filafest atau Filkom Anniversary Festival adalah acara tahunan yang
            diadakan oleh Fakulas Ilmu Komputer Universitas Brawijaya dalam
            rangka memperingati dan merayakan diesnatalis fakultas. Acara ini
            dikemas dalam dua rangkaian, yaitu jalan sehat dan malam puncak
          </p>
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
            <div style={{ width: "80%" }}>
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
            <Row>
              <div style={{ width: "100%" }}>
                <h1
                  style={{
                    fontSize: "xx-large",
                    float: "right"
                  }}
                >
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
              </div>
              <div style={{ float: "right", width: "80%" }}>
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
            </Row>
          </Col>
          <Col span={12} style={{ padding: "0px 5px" }}>
            <Img
              src="./asset/slider1.JPG"
              style={{ width: "80%", float: "left", borderRadius: "7.5%" }}
            />
          </Col>
        </Row>
      </Layout>
    );
  }
}
