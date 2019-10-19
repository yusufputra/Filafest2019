import React, { Component } from "react";
import { Layout, Row, Col, Button, Card } from "antd";
import { Link } from "react-router-dom";
import Axios from 'axios';

export default class Tiket extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: 0,
  //     closed: true
  //   };
  // }
  // componentDidMount() {
  //   Axios.post(
  //     "https://backend-bem.herokuapp.com/api/web/protected/getAllTiket",
  //     {},
  //     {
  //       headers: {
  //         authorization: "bearer " + localStorage.token
  //       }
  //     }
  //   )
  //     .then(ress => {
  //       console.log(ress)
  //       this.setState({ data: ress.data.length, loading: false });
  //     }).then(()=>{
  //       this.setState({closed:(this.state.data >= 285)})
  //     })
  //     .catch(error => {
  //       alert(error);
  //     });
  // }
  render() {
    const { Meta } = Card;
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
            Choose Ticket
          </h1>
          <hr
            style={{ border: "1px solid red", width: 150, marginTop: "-10px" }}
          />
        </Row>
        <Row type="flex" justify="center" gutter={16}>
          <Col xs={{ span: 16 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
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
                    <Link to={"/confirmTicket"}>
                    <Button
                      type={'danger'}
                      // disabled={this.state.closed}
                      onClick={()=>{
                        localStorage.kind = 'jalansehat2019'
                      }}
                        style={{
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {/* {(this.state.data === 0) && ("Loading...") || (this.state.closed) === true && ("Closed")||(this.state.closed) === false && ("Get Ticket")} */}
                        {"Get Ticket"}
                      </Button>
                    </Link>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col xs={{ span: 16 }} lg={{ span: 6 }}>
            <Card
              hoverable
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
                    <Link to={"/confirmTicket"}>
                      <Button
                      type={'danger'}
                      disabled
                      onClick={()=>{
                        localStorage.kind = 'malampuncak2019'
                      }}
                        style={{
                          borderRadius: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {"Coming Soon"}
                      </Button>
                    </Link>
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
