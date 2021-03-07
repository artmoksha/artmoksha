import React from 'react'
import {Row} from "antd";


//component
import SectionTitle from "../common/Title";
import SingleCollection from './Single'
import axios from "axios";


class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            button: this.props.button,
            collections: this.props.collections || []
        };
    }

    async componentDidMount() {
        await axios.get("/api/collections").then(response => {
            let collections = response.data
            this.setState({collections})
        })
    }

    render() {
        let buttonLink = {title: 'View All Collections', link: '/collections'};
        return (
            <React.Fragment>
                <section className={'am-section am-section-collections'}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle
                                title={this.state.title}
                                description={this.state.description}
                                position={'left'}
                                button={buttonLink}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row gutter={[48, 48]}>
                                {this.state.collections.slice(0, 6).map((collection, index) => {
                                    return (
                                        <SingleCollection
                                            key={index}
                                            collection={collection}>
                                        </SingleCollection>
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

export default Collections