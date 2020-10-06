# vagteam-scroller

![](https://img.shields.io/badge/npm-0.12-orange.svg) ![](https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg)

基于 react 的 滚动条组件, [在线 demo](https://github.com/xutong8/zjuvag-scroller/)

## Installation

```bash
npm install vagteam-scroller --save
```

## Usage

```javascript
import React from 'react'
import Scroller from 'vagteam-scroller'

class Demo extends React.Component {
  render() {
    const tagName = ['java', 'javscript', 'C', 'C++', '前端', 'React', 'Vue', 'redux', '写作', '程序员', '编程']
	  return (
		<<Scroller
            width="100px"
            height="200px"
            isHorizontalBar={false}
            isVerticalBar={true}>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
            <div>我是XX</div>
        </Scroller>
	  )
   }
}
```

## API
对于Scoller可以设置一些自定义属性，具体如下：

| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | -- |
| width | 宽度 | string | 100%
| height | 高度 | string | 100%
| isHorizontalBar | 是否显示水平滚动条 | boolean | true |
| isVerticalBar | 是否显示垂直滚动条 | boolean | false

## License
MIT