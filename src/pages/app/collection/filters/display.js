import React from "react";
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Single Item
                    </a>
                </Menu.Item>
                <Menu.Item icon={<DownOutlined/>} disabled>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Bundle
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <React.Fragment>
                <section className={"filter-display"}>
                    <Dropdown overlay={menu}>
                        <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Single Item <DownOutlined/>
                        </button>
                    </Dropdown>
                </section>
            </React.Fragment>
        )
    }
}

export default Display;