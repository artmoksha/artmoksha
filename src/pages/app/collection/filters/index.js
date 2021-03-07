import React from "react";

import Sort from './sort'
import Search from './search'
import Display from './display'

class Filters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className={"am-collection-filter"}>
                    <Sort/>
                    <Search/>
                    <Display/>
                </section>
            </React.Fragment>
        )
    }
}

export default Filters;