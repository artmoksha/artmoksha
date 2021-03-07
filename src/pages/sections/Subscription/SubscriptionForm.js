import React from "react";
import {Form, Input, Button, Row, Col} from 'antd';
import * as Icon from '@ant-design/icons';

const styleInlineRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: '2rem'
}

class SubscriptionForm extends React.Component {
    componentDidMount() {
    }

    handleSubmit = (e) => {
    }

    render() {
        // Only show error after a field is touched.
        return (
            <React.Fragment>

                <Row justify={"center"} gutter={[32, 32]}>
                    <Col span={12}>
                        <form className={'ant-form ant-form-inline'}>
                            <div style={styleInlineRow} className={'ant-form-item-control'}>
                                <input className={'input form-control'}/>
                                <button className={'btn btn-primary form-control'}>Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default SubscriptionForm;
