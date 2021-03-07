import React from "react";
import {Button} from "antd";

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let artwork = this.props.artwork;
        return (
            <React.Fragment>
                <div className={"am-art-slide"}>
                    <div className={"am-art-slide-overlay"}></div>
                    <div className={"am-slide-x"}>
                        <div className={"am-art-header"}>
                        </div>
                        <div className={"am-art-body"}>
                            <a href="/token?">
                                <div className={"am-slide"}>
                                    <img
                                        xs={{span: 24}}
                                        md={{span: 24}}
                                        lg={{span: 6}}
                                        className={'am-artwork-image'}
                                        alt={(artwork.name) ? artwork.name : ' '}
                                        src={artwork.image_thumbnail_url}/>
                                </div>
                            </a>
                        </div>
                        <div className={"am-art-title"}>
                            <a href="">{(artwork.name) ? artwork.name : ' '}</a>
                        </div>
                        <div className={"am-art-meta"}>
                            <span className={'text-muted'}>
                            {(artwork.description) ? artwork.description : ' '}
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Slide;