import React from 'react'
import {Row} from "antd";


//component
import SectionTitle from "../common/Title";
import SingleFAQ from './Single'
import axios from "axios";


class Faqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            faqs: this.props.artists || [],
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
        return (
            <React.Fragment>
                <section className={'am-section am-section-faq'}>
                    <section className={'am-section-container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle title={this.state.title}
                                          description={(this.state.description) ? this.state.description : ' '}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row gutter={[32, 32]} style={{marginTop: '1rem'}}>
                                {this.state.faqs.map((faq, index) => {
                                    return (<SingleFAQ key={index} faq={faq}/>)
                                })}
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Faqs