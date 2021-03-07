import React from "react";
import {Image, Typography} from "antd";

const {Title, Paragraph} = Typography;

const styleTitle = {}

class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let step = this.props.step;
        return (
            <React.Fragment>
                <div className={'am-step-single'}>
                    <div className={'am-step-img-container'}>
                        <Image preview={false} src={step.icon}/>
                    </div>
                    <Title className={'am-step-title'} style={styleTitle} level={3}>
                        {this.props.count}. {step.title}
                    </Title>
                    <Paragraph className={'am-step-description'}>{step.description}</Paragraph>
                </div>
            </React.Fragment>
        )
    }
}

export default Step;