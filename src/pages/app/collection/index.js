import React from "react";
import {Col, Row} from "antd";


import axios from "axios";
import Slide from "../../sections/Artworks/Slide";
import Filters from './filters'
import Artworks from "./artwork/artworks";

class Collection extends React.Component {
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
        let headerStyle = {
            backgroundImage: 'url("/img/slider/art-moksha-slide.jpeg")',
            height: '200px',
            backgroundSize: '100%'
        }
        return (


            <React.Fragment>
                <section className={'am-section am-section-collection'}>
                    <section className={'am-section-artwork'}>
                        <section style={headerStyle} className={'am-collection-header'}>
                            <section className={'am-section-container container'}>

                            </section>
                        </section>
                        <section className={'am-collection-filter'}>
                            <section className={'am-section-container container'}>
                                <Filters/>
                            </section>
                        </section>
                        <section className={'am-collection-content'}>
                            <section className={'am-section-container container'}>
                                <Row gutter={48}>
                                    <Col xl={24}>
                                        <h1> Recently added</h1>
                                    </Col>
                                </Row>
                                <section className={'section-row'}>
                                    {this.state.artworks.slice(0, 6).map((artwork, index) => {
                                            return (<Slide key={index} artwork={artwork}></Slide>)
                                        }
                                    )}
                                </section>
                            </section>
                            <section className={'am-section-container container'}>
                                <Row gutter={48}>
                                    <Col xl={24}>
                                        <h1> Best Selling</h1>
                                    </Col>
                                </Row>
                                <section className={'section-row'}>
                                    {this.state.artworks.slice(0, 6).map((artwork, index) => {
                                            return (<Slide key={index} artwork={artwork}></Slide>)
                                        }
                                    )}
                                </section>
                            </section>
                            <section className={'am-section-container container'}>
                                <Row gutter={48}>
                                    <Col xl={24}>
                                        <h1> Newly Minted</h1>
                                    </Col>
                                </Row>
                                <section className={'section-row'}>
                                    {this.state.artworks.slice(0, 6).map((artwork, index) => {
                                            return (<Slide key={index} artwork={artwork}></Slide>)
                                        }
                                    )}
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Collection