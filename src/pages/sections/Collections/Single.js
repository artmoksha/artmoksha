import React from "react";
import {Image, Col} from "antd";
import * as url from "url";


class Collection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let collection = this.props.collection;
        let preview = (collection.large_image_url) ? collection.large_image_url
            : collection.image_url;
        let bgStyle = {
            backgroundImage: 'url("' + (collection.image_url) + '")'
        }
        console.log(JSON.stringify(collection))

        return (
            <React.Fragment>
                <Col className="gutter-row"
                     xs={{span: 24}}
                     md={{span: 24}}
                     lg={{span: 8}}>
                    <section className={'am-single-collection-wrapper'}>
                        {/*<div id="overlay"></div>*/}
                        <div style={{
                            // backgroundImage: 'url("/img/' + cover + '")'
                        }} className={'am-single-collection'}>
                            <div className={'am-collection'}>
                                <a href="/collection/thangka-art" className={"item"}>
                                    <div className={"item-image"} style={bgStyle}></div>
                                    <div className={"item-body"}>
                                        <div className={'item-title'}>
                                            {collection.name}
                                        </div>
                                        <div className={'item-creator'}>
                                            <span>{collection.slug}</span>
                                            <span className={"sc-gtssRu fnyloc"}><strong>44</strong> items</span>
                                        </div>
                                    </div>
                                </a>

                                {/*<Image*/}
                                {/*    width={'100%'}*/}
                                {/*    src={collection.image_url}*/}
                                {/*    placeholder={*/}
                                {/*        <Image*/}
                                {/*            // preview={false}*/}
                                {/*            src={preview}*/}
                                {/*            width={200}*/}
                                {/*        />*/}
                                {/*    }*/}
                                {/*/>*/}
                                {/*<Title className={'am-single-collection-title'} level={4}>{title}</Title>*/}
                                {/*<Image src={'/img/' + cover}/>*/}
                            </div>
                        </div>
                    </section>
                </Col>
            </React.Fragment>
        )
    }
}

export default Collection;