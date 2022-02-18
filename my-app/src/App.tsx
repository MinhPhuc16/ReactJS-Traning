import React from "react";
import { Layout, Menu, Avatar } from "antd";
import "./App.css";
import {
  MailOutlined,
  UserOutlined,
  PaperClipOutlined,
  ShopOutlined,
  ScheduleOutlined,
  PoundOutlined,
  CreditCardOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import ava from "../src/assets/images/RR.jpeg";
import logo1 from "../src/assets/images/Ralf.jpeg";
import logo2 from "../src/assets/images/scott.jpeg";
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider className="sider">
          <div className="firstDiv">
            <div className="info">
              <img className="ava" src={ava} />
              <div className="name">
                <p className="manager"> Manager </p>
                <p className="managerName"> Ralf Rangnick</p>
              </div>
            </div>
          </div>
          <Menu mode="inline" theme="dark" className="menu">
            <Menu.Item className="text" key="Dashboard">
              Dashboard
            </Menu.Item>
            <Menu.Item className="text" icon={<PaperClipOutlined />} key="News">
              News
            </Menu.Item>
            <Menu.Item className="text" icon={<ShopOutlined />} key="Shop">
              Shop
            </Menu.Item>
            <Menu.Item
              className="text"
              icon={<ScheduleOutlined />}
              key="Fixtures"
            >
              Fixtures
            </Menu.Item>
            <SubMenu
              className="text"
              key="sub2"
              icon={<UserOutlined />}
              title="Players"
            >
              <Menu.ItemGroup>
                <Menu.Item>Men</Menu.Item>
                <Menu.Item>Women</Menu.Item>
                <Menu.Item>Under-23s</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item className="text" icon={<PoundOutlined />} key="Ticket">
              Ticket
            </Menu.Item>
            <Menu.Item
              className="text"
              icon={<CreditCardOutlined />}
              key="Stadium"
            >
              OldTrafford
            </Menu.Item>

            <SubMenu
              className="text"
              key="sub1"
              icon={<MailOutlined />}
              title="About Us"
            >
              <Menu.ItemGroup>
                <Menu.Item>History</Menu.Item>
                <Menu.Item>Titles</Menu.Item>
                <Menu.Item>Stories</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Title style={{ color: "white" }} level={3}>
              Manchester United
            </Title>
            <Avatar
              style={{
                height: "72px",
                width: "72px",
              }}
              src="./MU.jpeg"
            />
          </Header>
          <Content>
            <div className="content">
              <div className="body">
                <div className="img-wrapper">
                  <img className="logo1" src={logo1} />
                </div>
                <div className="text-wrapper">
                  <div className="line" />
                  <div>
                    <p className="news"> EARLY TEAM NEWS FOR LEEDS V UNITED</p>
                  </div>
                  <div>
                    <p className="news1">
                      How both squads are shaping up before Sunday's eagerly
                      anticipated Roses match.
                    </p>
                  </div>
                  <div className="news2Container">
                    <p className="news2"> 15h | news</p>
                    <ShareAltOutlined
                      style={{ marginTop: "134px", marginRight: "15px" }}
                      color="black"
                    />
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="img-wrapper">
                  <img className="logo1" src={logo2} />
                </div>
                <div className="text-wrapper">
                  <div className="line" />
                  <div>
                    <p className="news"> SCOTT REVEALS HIS PERSONAL TARGET </p>
                  </div>
                  <div>
                    <p className="news1">
                      McTominay discusses the nuances of his different positions
                      and what he wants to add to his game
                    </p>
                  </div>
                  <div className="news2Container">
                    <p className="news2"> 18h | news</p>
                    <ShareAltOutlined
                      style={{ marginTop: "134px", marginRight: "15px" }}
                      color="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
