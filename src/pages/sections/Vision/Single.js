import React from "react";
import {Image, Typography} from "antd";

const {Title, Paragraph} = Typography;

class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            image: 'adm',
            icon: 'adm',
        }
    }

    render() {
        let value = this.props.value;
        return (
            <React.Fragment>
                <div className={'am-vision-wrapper'}>
                    <div className={'am-vision-img-container'}>
                        <Image
                            src={value.image}
                            preview={false}
                        />
                    </div>
                    <Title className={'am-vision-title'} level={3}>{value.name}</Title>
                    <Paragraph className={'am-vision-description'}>{value.description}</Paragraph>
                </div>
            </React.Fragment>
        )
    }
}

export default Single;