import React from "react";
import {Carousel, Typography, Row, Col, Button, Image} from "antd";

import {Avatar} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';


const {Title, Text, Paragraph} = Typography;


const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    height: '100%',
    boxSizing: 'border-box',
    padding: '5rem 3rem'

};
const styleDiv = {
    backgroundImage: 'url("/img/slider/art-moksha-slide.jpeg")',
    backgroundSize: '100%'
};


class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    getBackground(image) {
        return {backdropImage: image}
    }

    render() {
        let slide = this.props.slide;
        let bg = this.getBackground(slide.image_url)
        let wrapperStyle = {backdropImage: 'url("' + slide.image_url + '")'};
        let creatorName = (null !== slide.creator.user) ? slide.creator.user : 'mil'
        let creatorProfile = (null !== slide.creator.profile_img_url) ? slide.creator.profile_img_url : (
            <AntDesignOutlined/>)



        let collectionPrice = slide.collection.payment_tokens[0]
        return (
            <React.Fragment>
                <section data-url={slide.image_url} style={wrapperStyle} className={'slide-wrapper'}>
                    <Row gutter={[48, 48]}>
                        <Col
                            xs={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 24}}>
                            <section className={'slide-section section-top'}>
                                <Title className={'slide-heading'} level={1}>{slide.name}</Title>
                                <Paragraph className={'slide-description'}>
                                    {slide.description}
                                </Paragraph>
                            </section>
                            <section className={'slide-section section-bottom'}>
                                <Row gutter={24}>
                                    <Col
                                        xs={{span: 4}}
                                        md={{span: 3}}
                                        lg={{span: 3}}>
                                        <Avatar src={slide.title}
                                                className={'circle img-circle'}
                                                src={creatorProfile}
                                        />
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 9}}
                                         lg={{span: 9}}>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>{creatorName}</Text>
                                        </section>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>
                                                {collectionPrice.symbol} {collectionPrice.usd_price}
                                            </Text>
                                        </section>
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 12}}
                                         lg={{span: 12}}>
                                        <div className={'color-white'}>
                                            <Button className={'slide-button'} type={'default'}>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                </section>

            </React.Fragment>
        )
    }
}


// backgroundImage: 'url("/img/slider/slide-2.jpg")',

export default Slide