import React from 'react'
import {Col, Row} from "antd";

import SectionTitle from "../common/Title";
import SingleValueComponent from './Single'
import axios from "axios";

class Vision extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            values: this.props.values || [],
            status: '...loading'
        };
    }

    async componentDidMount() {
        await axios.get("api/vision").then(response => {
            let values = response.data
            this.setState({values})
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className={'am-section am-section-vision '}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle title={this.state.title}
                                          description={this.state.description}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row gutter={[32, 48]}>
                                {this.state.values.map((value, index) => {
                                    return (
                                        <Col key={index}
                                             xs={{span: 24}}
                                             md={{span: 24}}
                                             lg={{span: 8}}
                                        >
                                            <SingleValueComponent
                                                key={index}
                                                value={value}>
                                            </SingleValueComponent>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Vision