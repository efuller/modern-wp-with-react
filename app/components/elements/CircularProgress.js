import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    circle: {
        left: '45%',
        top: '250px'
    }
};

const LoadingCircular = () => (
    <CircularProgress style={styles.circle} size={1} color="#FF5722" />
);

export default LoadingCircular;