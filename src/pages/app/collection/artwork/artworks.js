import React from "react";

import Slide from "../../../sections/Artworks/Slide";

class Artworks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className={'section-row'}>
                    {this.state.artworks.slice(0, 6).map((artwork, index) => {
                            return (<Slide key={index} artwork={artwork}></Slide>)
                        }
                    )}
                </section>
            </React.Fragment>
        )
    }
}

export default Artworks;