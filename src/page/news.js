import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";

export default class News extends Component {
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
        <Row style={{ padding: "75px 50px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "xx-large"
            }}
          >
            Berita
          </h1>
          <hr
            style={{ border: "1px solid red", width: 50, marginTop: "-10px" }}
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
      </Layout>
    );
  }
}
