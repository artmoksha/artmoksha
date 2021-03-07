import React from "react";

import * as Icon from "react-feather";

class Sort extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className={"filter-sort"}>
                    <button aria-label="Sort" className="jsx-3088626367 half">
                        <Icon.AlignLeft/>
                        <span className="jsx-3088626367">sort</span>
                    </button>
                </section>
            </React.Fragment>
        )
    }
}

export default Sort;