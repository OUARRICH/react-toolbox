import clsx from 'clsx';

import './loading.css';

const LoadingSpinner = ({ size }) => {
    const spinnerClass = clsx('loading-spinner', {
        'loading-spinner-small': size === 'small',
        'loading-spinner-medium': size === 'medium',
        'loading-spinner-large': size === 'large',
    });

    return (
        <div className={spinnerClass}>
            <div className="spinner-inner" style={{ borderColor: '#0870ED #F8A431 #00DDE3' }}></div>
        </div>
    );
};

export default LoadingSpinner;
