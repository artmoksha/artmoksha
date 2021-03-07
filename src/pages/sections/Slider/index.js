import {Row, Col, Carousel} from 'antd';
import React from 'react'

//component
import SlideOne from '../../../assets/images/slider/slide-1.jpg';
import Slide from './Slide'
import * as url from "url";
import axios from "axios";

const styleDiv = {
    backgroundImage: 'url("/img/slider/art-moksha-slide.jpeg")',
};

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            slides: this.props.slides || [],
            loading: '...loading',
            backgroundImage: ''
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    protected
    slider;

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    updateBackground = imageUrl => {
        return ({
            backgroundImage: 'url("' + this.state.backgroundImage + '")',
        })
    }

    async componentDidMount() {
        await axios.get("/api/slides").then(response => {
            let slides = response.data
            this.setState({slides})
        })
    }

    render() {
        const {loading, slides} = this.state.slides;
        return (
            <React.Fragment>
                <section style={styleDiv} className={'am-section am-section-slider'}>
                    <section className={'am-section-container container'}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={24}>
                                <Carousel autoplay>
                                    {this.state.slides.slice(0, 1).map((slide, index) => {
                                        return (<Slide key={index} slide={slide}/>)
                                    })}

                                    <div style={{textAlign: "center"}}>
                                        <button className="button" onClick={this.previous}>
                                            Previous
                                        </button>
                                        <button className="button" onClick={this.next}>
                                            Next
                                        </button>
                                    </div>
                                </Carousel>
                            </Col>
                        </Row>
                    </section>
                </section>
            </React.Fragment>

        );
    }
}

export default Slider;

