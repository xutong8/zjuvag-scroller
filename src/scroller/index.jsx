import React from 'react';
import './index.scss';

const Scroller = (props) => {

    const { width, height, isHorizontalBar, isVerticalBar } = props;

    return (
        <div id="container"
            style={{
                width: width ? width : '100%',
                height: height ? height : '100%',
                overflowX: isHorizontalBar ? 'auto' : 'hidden',
                overflowY: isVerticalBar ? 'auto' : 'hidden'
            }}>
            {props.children}
        </div>
    )
};

export default Scroller;