import React from 'react';
import Icons from '../icons';

const ErrorIndicator = () => {
    return (
        <div className="toast mx-auto showing my-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-danger text-white">
                <strong>Error</strong>
            </div>
            <div className="toast-body text-danger text-center">
                <div className="mb-3">
                    <Icons.DeathStar height="80" width="80" />
                </div>
                <strong className="h2 d-block">BOOM!!!</strong>
                Something went wrong
            </div>
        </div>
    );
}

export default ErrorIndicator;