import React from "react";
import {Col, Row, Typography} from "antd";

//component
import SubscriptionForm from "./SubscriptionForm";
import SectionTitle from "../common/Title";


const {Title, Paragraph} = Typography;

class Subscription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className={'am-section am-section-subscription'}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle title={this.state.title}
                                          description={this.state.description}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row gutter={[48, 48]}>
                                <Col xs={{span: 24}}
                                     md={{span: 24}}
                                     lg={{span: 24}}>
                                    <section className={'am-subscription-block right'}>
                                        <SubscriptionForm/>
                                    </section>
                                </Col>
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Subscription;