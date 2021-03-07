import React from 'react'
import {Avatar, Col, Row} from "antd";


//component
import SectionTitle from "../common/Title";
import SingleFAQ from './Single'
import axios from "axios";


import Faq from "react-faq-component";
import * as Icon from "react-feather";

const styles = {
    bgColor: 'white',
    titleTextColor: "#333",
    rowTitleColor: "#333",
    rowContentColor: 'grey',
    // arrowColor: "#333",
};

const config = {
    // animate: true,
    arrowIcon: (<Icon.ArrowDown/>),
    // arrowIcon: (<Avatar src={'/img/arrow-down.svg'}/>),
    // tabFocus: true
};




class Faqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            faqs: this.props.faqs || [],
            status: '...loading'
        };
    }

    async componentDidMount() {
        await axios.get("api/faqs").then(response => {
            let faqs = response.data
            this.setState({faqs});
        })
    }

    render() {
        let data = {rows: this.state.faqs};
        return (
            <React.Fragment>
                <section className={'am-section am-section-faq'}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle title={this.state.title}
                                          description={(this.state.description) ? this.state.description : ' '}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            {/*<Row gutter={[32, 32]} style={{marginTop: '1rem'}}>*/}
                            {/*{this.state.faqs.map((faq, index) => {*/}
                            {/*    return (<SingleFAQ key={index} faq={faq}/>)*/}
                            {/*})}*/}
                            {/*</Row>*/}
                            <Row gutter={[32, 32]} style={{marginTop: '1rem'}}>
                                <Col
                                    xs={{span: 24, offset: 0}}
                                    md={{span: 12}}
                                    lg={{span: 12, offset: 6}}>
                                    <Faq
                                        data={data}
                                        styles={styles}
                                        config={config}
                                    />
                                </Col>
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Faqs