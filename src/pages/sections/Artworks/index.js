import React from 'react'

import {Col, Row} from 'antd';
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
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        let buttonLink = {title: 'View All', link: '/artworks'};
        return (
            <React.Fragment>
                <section className={'am-section am-section-artwork'}>
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
                            <Row justify={'center'} gutter={32}>
                                <Col className="gutter-row"
                                     xs={{span: 24}}
                                     md={{span: 24}}
                                     lg={{span: 24}}>
                                    <section className={'am-art-slider-wrapper'}>
                                        <section className={'am-art-slider-inner'}>
                                            <Slider {...settings}>
                                                {this.state.artworks.map((artwork, index) => {
                                                        return (
                                                            <Slide
                                                                key={index}
                                                                artwork={artwork}
                                                            ></Slide>
                                                        )
                                                    }
                                                )}
                                            </Slider>
                                        </section>
                                    </section>
                                </Col>
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}


export default SliderArtwork;
