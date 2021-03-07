import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import React from "react";

const {Title} = Typography;
const {Meta} = Card;


class Artwork extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    }

    render() {
        let artwork = this.props.artwork;
        let creator = (null !== artwork.creator.user) ? artwork.creator.user :
            ((null != artwork.owner.user) ? artwork.owner.user.username : '');
        return (
            <React.Fragment>
                <Col className="gutter-row am-artwork-wrapper"
                     xs={{span: 24}}
                     md={{span: 6}}
                     lg={{span: 6}}>
                    <div className={'am-artwork'}>
                        <Card
                            headStyle={{border: 0}}
                            cover={<img
                                xs={{span: 24}}
                                md={{span: 24}}
                                lg={{span: 6}}
                                className={'am-artwork-image'}
                                alt={(artwork.name) ? artwork.name : ' '}
                                src={artwork.image_thumbnail_url}/>}
                            bordered={true}
                            size={'large'}
                        >
                            <div className={'am-artwork-body-wrapper'}>
                                <Row className={'title-row'} style={{marginBottom: '.5rem'}}>
                                    <Title className={'am-artwork-title'}
                                           level={3}>{(artwork.name) ? artwork.name : ' '}</Title>
                                </Row>
                                <Row justify={'center'}>
                                    <Col span={14}>
                                        <Meta
                                            avatar={<Avatar src={artwork.creator.profile_img_url}/>}
                                            title={creator}
                                            description={artwork.creator.user}
                                        />
                                    </Col>
                                    <Col span={10} className={'text-right'}>
                                        <a
                                            className={'artwork-button'}
                                            href={artwork.permalink} type="default"
                                            size={'medium'}>
                                            Buy Now
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </Col>
            </React.Fragment>
        )
    }
}

export default Artwork;