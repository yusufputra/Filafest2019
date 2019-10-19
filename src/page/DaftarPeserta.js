import React, { Component } from "react";
import { Layout, Row, Table } from "antd";
import Axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";
export default class DaftarPeserta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    Axios.post(
      "https://backend-bem.herokuapp.com/api/web/protected/getAllTiket",
      {},
      {
        headers: {
          authorization: "bearer " + localStorage.token
        }
      }
    )
      .then(ress => {
        this.setState({ data: ress.data, loading: false });
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    const headers = [
      { label: "ID", key: "id" },
      { label: "Nama", key: "nama" },
      { label: "NIM", key: "nim" },
      { label: "Jenis Tiket", key: "jenisTiket" }
    ];
    const column = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: (a, b) => a.key - b.key,
        sortDirections: ["descend", "ascend"]
      },
      {
        title: "Nama Peserta",
        dataIndex: "nama"
      },
      {
        title: "NIM Peserta",
        dataIndex: "nim"
      },
      {
        title: "Jenis Tiket",
        dataIndex: "jenisTiket"
      }
    ];
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
            Daftar Peserta
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
          {this.state.loading === true && <center>Loading...</center>}
          <div>
            <p>Total Pendaftar: </p>
            {this.state.data.length}
            <CSVLink data={this.state.data} headers={headers}>
              Download me
            </CSVLink>
          </div>
          <Table columns={column} dataSource={this.state.data} />
        </Row>
      </Layout>
    );
  }
}
