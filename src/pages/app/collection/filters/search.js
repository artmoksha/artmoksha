import React from "react";
import * as Icon from "react-feather";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className={"filter-search"}>
                    <button aria-label="search">
                        <Icon.Search/>
                        <span>search</span>
                    </button>
                </section>
            </React.Fragment>
        )
    }
}

export default Search;