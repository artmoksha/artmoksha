import React from "react";
import {Row} from "antd";
import axios from "axios";
// components
import SectionTitle from '../common/Title';
import SingleArtist from './Single'

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            artists: this.props.artists || [],
            status: '...loading'
        };
    }

    async componentDidMount() {
        await axios.get("api/users").then(response => {
            let artists = response.data
            this.setState({artists})
        })
    }

    render() {
        let buttonLink = {title: 'View All', link: '/artists'};
        return (
            <React.Fragment>
                <section className={'am-section am-section-artists'}>
                    <section className={'am-section-container container'}>
                        {/*Title*/}
                        <section className={'am-section-title'}>
                            <SectionTitle
                                title={this.state.title}
                                description={this.state.description}
                                button={buttonLink}>
                            </SectionTitle>
                        </section>
                        {/*Content*/}
                        <section className={'am-section-content'}>
                            <Row gutter={[48, 48]}>
                                {this.state.artists.map((artist, index) => {
                                    return (
                                        <SingleArtist
                                            key={index}
                                            name={artist.name}
                                            tagline={artist.country}
                                            avatar={artist.avatar}>
                                        </SingleArtist>
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

export default Artists;