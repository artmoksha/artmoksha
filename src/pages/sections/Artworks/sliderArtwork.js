import React from 'react'

import {Row, Slider} from 'antd';


//components
import SectionTitle from '../common/Title';
import SingleArtwork from './Artwork'
import axios from "axios"


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
            slidesToScroll: 3
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
                                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                    <div>
                                        <h3>7</h3>
                                    </div>
                                    <div>
                                        <h3>8</h3>
                                    </div>
                                    <div>
                                        <h3>9</h3>
                                    </div>
                                </Slider>
                            </Row>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}


export default SliderArtwork;
