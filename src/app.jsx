import React from 'react';
import ReactDOM from 'react-dom';
// import Scroller from './scroller';
// import Scroller from '../lib/scroller/index';
import Scroller from '../dist/index';

const App = () => {
    return (
        <Scroller
            width="100px"
            height="200px"
            isHorizontalBar={false}
            isVerticalBar={true}>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
            <div>我是徐彤</div>
        </Scroller>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);