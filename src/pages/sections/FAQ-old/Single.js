import React from "react";
import {Col, Typography} from "antd";

import * as Icon from 'react-feather';

const {Title, Paragraph} = Typography;


class Faq extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleButton = (values) => {
    }

    render() {
        let faq = this.props.faq;
        return (
            <React.Fragment>
                <Col
                    xs={{span: 24, offset: 0}}
                    md={{span: 12}}
                    lg={{span: 12, offset: 6}}>
                    <section className={'am-faq-wrapper'}>
                        <div className={'am-question'}>
                            <Title className={'am-title'} level={3}>
                                <span>{faq.question}</span>
                            </Title>
                            <div className={'am-icon'}>
                                <Icon.PlusCircle onClick={this.toggleButton}/>
                            </div>
                        </div>
                        <div className={'am-answer'}>
                            <Paragraph className={'am-answer'}>{faq.answer}</Paragraph>
                        </div>
                    </section>
                </Col>
            </React.Fragment>
        )
    }
}

export default Faq;