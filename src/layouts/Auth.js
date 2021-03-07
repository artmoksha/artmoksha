import React, { Component, Suspense } from "react";
import { connect } from 'react-redux';


// const Index = React.lazy(() => import("./Index"));
// loading
const loading = () => <div className="text-center"></div>

class AuthLayout extends Component {
    render() {
        const children = this.props.children || null;
        return (
            <Suspense fallback={loading()}>
                {children}
            </Suspense>
        );
    }
}

export default connect()(AuthLayout);