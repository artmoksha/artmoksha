import React from 'react';
import {getLoggedInUser} from './../helpers/authUtils';
import Loader from './../components/Loader';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import SliderComponent from "./sections/Slider";
import Artworks from "./sections/Artworks";
import Collections from "./sections/Collections";
import Artists from "./sections/Artists";
import Process from "./sections/Process";
import WhyMoksha from "./sections/Vision";
import FAQs from "./sections/FAQ";
import Subscription from "./sections/Subscription";


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLoggedInUser(),
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                { /* preloader */}
                {this.props.loading && <Loader/>}
                <SliderComponent title="Slider" description="Slider"/>
                <Artworks title="Featured Artworks" description="Collect thangka artworks and create your own collection"/>
                <Collections title="Artmoksha Top Collections"
                             description="Discover your own artwork and create your own collection"
                />
                <Artists title="Artmoksha Creators"
                         description="We present the art that never seen before in crypto world"/>
                <Process title="How it works"
                         description="Create, sell or collect digital items secured with blockchain"/>
                <WhyMoksha title="Why artmoksha" description="Why artmoksha"/>
                <FAQs title="Frequently Asked Questions" description="Frequently Asked Questions"/>
                <Subscription title="Never Miss an Update"
                              description="Get the latest features plus news, articles and resources, sent straight to your inbox once a month."/>
            </React.Fragment>
        )
    }
}


export default HomePage;