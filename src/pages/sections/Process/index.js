import React from "react";
import {Col, Row} from "antd";
//component
import Single from './Single'
import SectionTitle from "../common/Title";
import axios from "axios";


class Process extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            steps: this.props.steps || [],
            status: '...loading'
        };
    }

    async componentDidMount() {
        await axios.get("/api/steps").then(response => {
            let steps = response.data
            this.setState({steps})
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className={'am-section am-section-process'}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle title={this.state.title}
                                          description={this.state.description}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row gutter={[48, 48]}>
                                {this.state.steps.map((step, index) => {
                                    return (<Col key={index}
                                                 xs={{span: 24}}
                                                 md={{span: 12}}
                                                 lg={{span: 12}}
                                                 gutter={2}>
                                        <Single key={index} count={(index + 1)} step={step}></Single>
                                    </Col>)
                                })}
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Process;