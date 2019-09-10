import React from 'react';

class LoadingSpinner extends React.Component {
    render() {
        return (
            <div>
                <span> 
                    <div className='spinner-border spinner-border-sm' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                    &nbsp;Loading...
                </span>
            </div>
        )
    }
}

export default LoadingSpinner;