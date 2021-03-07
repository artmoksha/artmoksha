import {Tooltip, Col, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, TwitterCircleFilled} from '@ant-design/icons';
import React, {Fragment} from "react";

const {Title} = Typography;

const Artist = (props) => {
    let {name, avatar, tagline} = props;
    return (
        <Fragment>
            <Col className="gutter-row"
                 xs={{span: 24}}
                 md={{span: 24}}
                 lg={{span: 6}}>
                <div className={'am-artist'}>
                    <section className={'artist-image'}>
                        <img alt={name} src={avatar}/>
                    </section>
                    <section className={'artist-description'}>
                        <Title level={3} className={'artist-title text-center'}>{name}</Title>
                        <div className={'artist-tagline'}>{tagline}</div>
                        <div className={'artist-meta'}>
                            <a className={'collections'}>
                                <strong>14</strong>&nbsp;
                                <span>artworks</span>&nbsp;
                            </a>
                            <a className={'artworks'}>
                                <strong>2</strong>&nbsp;
                                <span>collections</span>
                            </a>
                        </div>
                        <div className={'artist-meta social-media'}>
                            <a href={'#'} title={'Follow On Facebook'}>
                                <Tooltip title="Follow On Facebook">
                                    <FacebookOutlined/>
                                </Tooltip>
                            </a>
                            <a href={'#'} title={'Follow On Instagram'}>
                                <Tooltip title="Follow On Instagram">
                                    <InstagramOutlined/>
                                </Tooltip>
                            </a>
                            <a href={'#'} title={'Follow On Twitter'}>
                                <Tooltip title="Follow On Twitter">
                                    <span><TwitterCircleFilled/></span>
                                </Tooltip>
                            </a>
                        </div>
                    </section>
                </div>
            </Col>
        </Fragment>
    )
}
export default Artist;