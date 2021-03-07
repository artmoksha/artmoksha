import {Col, Row, Typography, Anchor, Button} from "antd";
import React  from "react";
import {DownloadOutlined} from '@ant-design/icons';


const {Link} = Anchor;
const {Title, Text, Paragraph} = Typography;
//return title,description and link  for  section
const SectionHeader = (props) => {


    let position = ['center', 'left'];
    let {title, button, alignment, description} = props;
    let sectionButton = ''
    let textStyle = {textAlign: 'center'};

    if (button) {
        sectionButton =( <Button shape="round" href={button.link} type="link" size={'large'}> {button.title} </Button>)
        textStyle = ''
    }
    return (
        <React.Fragment>
            <Row justify={'center'} gutter={16}>
                <Col span={24} style={textStyle}>
                    <Title className={'title'} level={3}>{(title) ? title : '  '}</Title>
                    <Title className={'description'} level={5}>{(description) ? description : ' '}</Title>
                    {sectionButton}
                </Col>
            </Row>
        </React.Fragment>

    )
}
export default SectionHeader
















