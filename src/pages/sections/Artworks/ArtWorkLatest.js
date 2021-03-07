import React from 'react'

import {Row} from 'antd';
import Slider from "react-slick";

//components
import SectionTitle from '../common/Title';
import SingleArtwork from './Artwork'
import axios from "axios"
import Slide from "./Slide";

class SliderArtwork extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            artworks: this.props.artworks || [],
            status: '...loading'
        };
    }

    async componentDidMount() {
        this._isMounted = true;
        await axios.get("/api/assets").then(response => {
            let artworks = (response.data)
            this.setState({artworks: artworks})
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
        };
        return (
            <React.Fragment>
                <section className={'am-section am-section-artwork'}>
                    <section className={'am-section-container container'}>
                        <section className={'am-section-title'}>
                            <SectionTitle
                                title={this.state.title}
                                description={this.state.description}
                                position={'left'}
                                button={{'title': 'View All', link: '#'}}>
                            </SectionTitle>
                        </section>
                        <section className={'am-section-content'}>
                            <Row justify={'center'} gutter={32}>

                                <section className={'am-art-slider-wrapper'}>
                                    <section className={'am-art-slider-inner'}>
                                        <Slider {...settings}>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                            <div>
                                                <Slide/>
                                            </div>
                                        </Slider>
                                    </section>
                                </section>
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}


export default SliderArtwork;
