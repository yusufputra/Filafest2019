import React  from "react";
import { Layout, Row, message, Button, Alert, Col } from "antd";
import { UserContext } from "../UserProvider";
import Axios from "axios";

const success = () => {
  message.loading("Checking your data..", 2.5).then(() => {
    Axios.post(
      "https://backend-bem.herokuapp.com/api/web/protected/getOneTiket",
      {
        jenis: localStorage.kind
      },
      {
        headers: {
          authorization: "bearer " + localStorage.token
        }
      }
    ).then(res => {
      if (res.data.status == true) {
        message.info(
          "Anda sudah memiliki tiket, silahkan cek halaman TiketKu",
          2.5
        );
      } else {
        message.loading("Inserting your data..", 2.5).then(() => {
          Axios.post(
            "https://backend-bem.herokuapp.com/api/web/protected/postTiket",
            {
              jenis: localStorage.kind
            },
            {
              headers: {
                authorization: "bearer " + localStorage.token
              }
            }
          ).then(ress => {
            if (ress.status == 200) {
              message.success("Loading finished", 2.5);
              window.location.href = "#/myTicket";
            } else {
              message.error("Error. Hubungi Panitia", 2.5);
            }
          });
        });
      }
    });
  });
};

const ConfirmTicket = () => {
  return (
    <UserContext.Consumer>
      {context => {
        if (context.loggedIn == false) {
          window.location.href = "#/";
        }
        console.log(context);
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
                Confirm Ticket
              </h1>
              <hr
                style={{
                  border: "1px solid red",
                  width: 150,
                  marginTop: "-10px"
                }}
              />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
              <Alert
                message="Confirm Tiket"
                description={
                  "Yakin ingin mencetak tiket untuk " +
                    (localStorage.kind == "jalansehat2019" && "Jalan Sehat") ||
                  (localStorage.kind == "malampuncak2019" && "Malam Puncak") +
                    "?"
                }
                type="info"
                showIcon
              />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
              <Button
                type={"danger"}
                style={{
                  margin: "20px",
                  borderRadius: "20px",
                  fontWeight: "bold"
                }}
                onClick={success}
              >
                Get Ticket
              </Button>
            </Row>
          </Layout>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ConfirmTicket;
