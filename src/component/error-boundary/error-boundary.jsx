import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch error', error)
        console.log('componentDidCatch errorInfo', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children
    }
}

export default ErrorBoundary;