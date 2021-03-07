import React from "react"
import ScrollToTop from "react-scroll-up"
import {Heart, ArrowUp, Twitter, Facebook, PhoneForwarded} from "react-feather"
import {Anchor, Button, Col, Row, Typography} from 'antd';


const {Link} = Anchor;
const {Title, Paragraph} = Typography;


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <footer className="am-footer footer">
                    <section className={'container-fluid'}>
                        <Row gutter={[16, 16]} justify="center" id={'footer'}>
                            <Col xs={{span: 24}}
                                 md={{span: 12}}
                                 lg={{span: 12}}>
                                <Col className={'am-footer-section'}
                                     xs={{span: 24}}
                                     md={{span: 12}}
                                     lg={{span: 12}}>
                                    <Title className={'am-footer-text-title'} level={5}>
                                        ArtMoksha is a online platform that connects artist with Collectors.
                                    </Title>
                                </Col>
                            </Col>
                            <Col className={'am-footer-section'}
                                 xs={{span: 24}}
                                 md={{span: 6}}
                                 lg={{span: 6}}>
                                <Title className={'am-footer-section-title'} level={4}>About</Title>
                                <div className={'am-footer-section-inner'}>
                                    <Paragraph> <a shape="round" type="link" size={'large'}>About Us</a></Paragraph>
                                    <Paragraph> <a shape="round" type="link" size={'large'}>Contact Us</a></Paragraph>
                                    <Paragraph> <a shape="round" type="link" size={'large'}>Blog</a></Paragraph>
                                    <Paragraph> <a shape="round" type="link" size={'large'}>FAQ</a></Paragraph>
                                </div>
                            </Col>
                            <Col className={'am-footer-section'}
                                 xs={{span: 24}}
                                 md={{span: 6}}
                                 lg={{span: 6}}>
                                <Row col={24}>
                                    <Title level={4}>Connect</Title>
                                </Row>
                                <div className={'am-footer-section-inner'}>
                                    <Paragraph><strong><PhoneForwarded size={16}/> </strong> +91 999999999</Paragraph>
                                    <Paragraph><strong><Facebook size={16}/>
                                    </strong> facebook.com/artmoksha</Paragraph>
                                    <Paragraph><strong><Twitter size={16}/> </strong> twitter.com/artmoksha</Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className={'container container-fluid'}>
                        <Row gutter={[16, 16]} justify="center" id={'footer'}>
                            <Col xs={{span: 24}}
                                 md={{span: 12}}
                                 lg={{span: 12}}>
                                <p>
                                    COPYRIGHT © {new Date().getFullYear()}&nbsp;&nbsp;
                                    <span className="float-md-right d-none d-md-block">
                                 <Heart className="text-danger heart" type={'danger'} size={15}/>
                                </span>
                                </p>
                                <ScrollToTop showUnder={160}>
                                    <Button type="primary">
                                        <ArrowUp size={15}/>
                                    </Button>
                                </ScrollToTop>
                            </Col>
                        </Row>
                    </section>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer
