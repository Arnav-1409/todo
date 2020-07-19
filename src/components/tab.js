import React from 'react';
import 'antd/dist/antd.css';
import './tab.css';
import BoxModal from './modal';
import { Tabs } from 'antd';
import User from './user'

const { TabPane } = Tabs;

class DemoTab extends React.Component {
  state = {
    tabPosition: 'top',
    flag: '',
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <div className="container">
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Todos" key="1">
            <BoxModal
              flag={0} />
          </TabPane>
          <TabPane tab="Users" key="2">
            <BoxModal
              flag={1} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default DemoTab;