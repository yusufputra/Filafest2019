import React, { Fragment } from "react";
import { Layout, Menu, Icon } from "antd";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import ReactModal from "react-modal";
import "./App.css";
import "antd/dist/antd.css";
import FormLoginComponent from "./component/FormLogin";
import Landing from "./page/landing";
import ButtonGroup from "antd/lib/button/button-group";
import { Button, Popover } from "antd";
import UserProvider, { UserContext } from "./UserProvider";
import Tiket from "./page/tiket";
import Tiiketku from "./page/tiketku";
import News from "./page/news";
import Barcode from "./page/barcode";
import Profile from "./page/profile";
import ConfirmTicket from "./page/confirmTicket";
import Axios from "axios";
import api from "./component/api";
import Admin from "./page/Admin";
export const AppContext = React.createContext();

function App() {
  return (
    <UserProvider>
      <UserContext.Consumer>
        {context => <AppChildren context={context} />}
      </UserContext.Consumer>
    </UserProvider>
  );
}

class AppChildren extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
      trigger: () => {
        this.setState({ success: !this.state.success });
      },
      visible: false,
      username: undefined,
      dataSource: []
    };
  }
  componentDidMount = async () => {
    this.props.context.checkLogin();
  };
  popOver() {
    return (
      <Fragment>
        <Link to="/myTicket">
          <div>{"TiketKu"}</div>
        </Link>
        {this.props.context.level == 1 && (
          <Link to="/admin">
            <div>{"Panel Admin"}</div>
          </Link>
        )}
        <Link>
          <div>
            <a onClick={this.logOut}>{"Keluar akun"}</a>
          </div>
        </Link>
      </Fragment>
    );
  }
  renderButton () {
    if (this.props.context.loggedIn) {
      Axios(api.checkadmin,{
        method:'POST',
        headers: {
          'authorization': 'bearer ' + localStorage.token
        }
      }).then(ress=>{
        if(ress.data.status === true){
          this.props.context.setLevel(ress.data.value[0].status)
        }
      })
      return (
        <ButtonGroup style={{ float: "right" }}>
          <Popover
            placement="bottomRight"
            content={this.popOver()}
            title={`Halo, ${this.props.context.nama}`}
            trigger="hover"
          >
            <Button>{this.props.context.nama}</Button>
          </Popover>
        </ButtonGroup>
      );
    }
    return (
      <ButtonGroup style={{ float: "right" }}>
        <Button
          onClick={this.showModal}
          style={{
            borderRadius: "20px",
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold"
          }}
        >
          {"Masuk"}
        </Button>
      </ButtonGroup>
    );
  }
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  logOut = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  handleOk = e => {
    //login process here
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Layout>
            <Layout.Header
              style={{
                backgroundColor: "white",
                position: "fixed",
                width: "100%",
                zIndex: "200",
                height: "auto"
              }}
              className="header"
            >
              <Link to="/">
                <div className="logo">
                  <img src="./asset/LogoBertulis.svg" width="90em" />
                </div>
              </Link>

              <Menu
                theme={"light"}
                mode={"horizontal"}
                style={{ lineHeight: "64px", float: "right", color: "red" }}
              >
                <Menu.Item
                  key="Informasi"
                  onClick={() => {
                    window.location.href = "#/news";
                  }}
                >
                  Informasi
                </Menu.Item>
                <Menu.Item
                  key="Tiket"
                  onClick={() => {
                    window.location.href = "#/chooseTicket";
                  }}
                >
                  Tiket
                </Menu.Item>
                <Menu.Item
                  key="Profil"
                  onClick={() => {
                    window.location.href = "#/profile";
                  }}
                >
                  Profil Filafest
                </Menu.Item>
                {this.renderButton()}
              </Menu>
            </Layout.Header>

            <ReactModal
              isOpen={this.state.visible}
              contentLabel="Login"
              shouldFocusAfterRender={true}
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEsc={true}
              shouldReturnFocusAfterClose={true}
              onRequestClose={this.handleCancel}
              style={{
                overlay: {
                  backgroundColor: "rgba(0,0,0,0.7)",
                  zIndex: 2
                },
                content: {
                  borderRadius: "8px",
                  bottom: "auto",
                  minHeight: "10rem",
                  left: "50%",
                  paddingTop: "0.4rem",
                  paddingLeft: "2rem",
                  paddingBottom: "2rem",
                  paddingRight: "2rem",
                  position: "fixed",
                  right: "auto",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  minWidth: "20rem",
                  width: "30%",
                  maxWidth: "30rem"
                }
              }}
            >
              <a onClick={this.handleCancel} style={{ marginLeft: "100%" }}>
                <Icon
                  type="close-circle"
                  style={{ fontSize: 25, color: "red" }}
                />
              </a>
              <FormLoginComponent />
            </ReactModal>

            <Layout.Content>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/chooseTicket" component={Tiket} />
                <Route path="/myTicket" component={Tiiketku} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" component={News} />
                <Route path="/confirmTicket" component={ConfirmTicket} />
                <Route path="/admin" component={Admin}/>
                <Route
                  path="/generateBarcode"
                  component={Barcode}
                  context={this.props.context}
                />
              </Switch>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: "center" }}>
              {"Developed PIT BEM FILKOM 2019"}
            </Layout.Footer>
          </Layout>
        </HashRouter>
      </div>
    );
  }
}

export default App;
