(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{375:function(t,n,e){"use strict";e.r(n);var a=e(48),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"填色游戏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#填色游戏"}},[t._v("#")]),t._v(" 填色游戏")]),t._v(" "),e("p",[t._v("学习canvas做的小test")]),t._v(" "),e("iframe",{staticStyle:{width:"375px",height:"667px",position:"relative",border:"5px solid red"},attrs:{id:"iframe",frameborder:"0",allowfullscreen:"true",src:""}}),t._v(" "),e("h2",{attrs:{id:"git地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git地址"}},[t._v("#")]),t._v(" git地址")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/secret821/Mytest/tree/%E5%A1%AB%E8%89%B2%E6%B8%B8%E6%88%8F"}},[t._v("点击跳转")])]),t._v(" "),e("h2",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" start")]),t._v(" "),e("p",[t._v("从零开始一个填色游戏色彩的世界多姿多彩.我们一起来看下吧!填色游戏需求在布满不同颜色的棋盘上,用最少的步数完成颜色的统一.思考:1、需要准备一个画布2、需要准备一个开发环境3、需要准备几个颜色的16进制或者rgba.注: 环境搭建详见「推箱子」一、创建一张地图首先创建一个10*10的格子地图.并填充随机色块./** 创建地图 */")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("map: number[][];\ncreateMapByColor() {\n    this.gameContainer = new FYGE.Container();\n    this.addChild(this.gameContainer);\n    this.map = [];\n    for (let i = 0; i &lt; Config.GRID_COUNT; i++) {\n        this.map[i] = [];\n        for (let j = 0; j &lt; Config.GRID_COUNT; j++) {\n            let _color = Config.GRID_COLORS[Math.floor(Math.random() * 6)];\n            this.map[i].push(_color);\n        }\n    }\n    this.rendermap();\n}使用fyge的矢量图绘制色块.let _rect = this.gameContainer.addChild(new FYGE.Graphics());\n_rect.lineStyle(1, 0xffffff, 1).beginFill(row, 1).drawRect(0, 0, Config.GRID_SIZE, Config.GRID_SIZE).endFill();同时创建6个色块按钮.监听按钮的点击事件.let _rect = this.addChild(new FYGE.Graphics()).lineStyle(0.5, 0xffffff, 1).beginFill(color, 1).drawRect(sx, sy, 100, 100).endFill();\n_rect.name = String(color);\n_rect.addEventListener(FYGE.MouseEvent.CLICK, () => this.onClickBtn(color), this);\n")])])]),e("p",[t._v("完成场景的绘制之后如图:二、匹配相同的色块每次重新渲染前,判断与[0][0]数组位置相连的色块.使用一个数组变量记录上一次相同相连的数组,为了减少开支,使用一维数组.如何找到相同相连的色块呢?只要当前色块的上方色块与左边色块均是与[0][0]色块一致,且上方色块和左边色块均在记录的一维数组中,则相连相同.代码如何实现呢?/** 匹配 */")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('matchColor(newColor: number) {\n    let lastMap = [];\n    let oldColor = this.map[0][0];\n    for (let i = 0; i &lt; this.map.length; i++) {\n        for (let j = 0; j &lt; this.map[i].length; j++) {\n            let leftBlock = j > 0 ? this.map[i][j - 1] : 0,\n                topBlock = i > 0 ? this.map[i - 1][j] : 0;\n            let str = `${i}-${j}`;\n            if (this.map[i][j] == oldColor) {\n                if (topBlock == oldColor) {\n                    if (lastMap.indexOf(`${i - 1}-${j}`) !== -1) {\n                        if (lastMap.indexOf(str) === -1) {\n                            lastMap.push(str);\n                        }\n                    }\n                }\n                if (leftBlock == oldColor) {\n                    if (lastMap.indexOf(`${i}-${j - 1}`) !== -1) {\n                        if (lastMap.indexOf(str) === -1) {\n                            lastMap.push(str);\n                        }\n                    }\n                }\n                if (i == 0 &amp;&amp; j == 0) {\n                    if (lastMap.indexOf(str) === -1) {\n                        lastMap.push(str);\n                    }\n                }\n            }\n        }\n    }\n    lastMap.forEach((item, index) => {\n        let i = item.split("-")[0], j = item.split("-")[1];\n        this.map[i][j] = newColor;\n    });\n}\n')])])]),e("p",[t._v("至此,我们实现了色块的匹配三、判断输赢如何判断游戏输赢呢?在规定步数内统一颜色即为胜利.代码中判断是否在规定步数内代码中判断是否每个格子颜色一致 /** 检查输赢 */")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("onCheck() {\n    if (this.step > Config.MAX_MOVES) {\n        return STATUS.lose;\n    }\n    if (this.step &lt;= Config.MAX_MOVES) {\n        let start = this.map[0][0], flag = 0;\n        for (let i = 0; i &lt; this.map.length; i++) {\n            for (let j = 0; j &lt; this.map[i].length; j++) {\n                if (this.map[i][j] != start) {\n                    flag = 1;\n                }\n            }\n        }\n        if (flag == 0) {\n            return STATUS.win;\n        }\n    }\n    return STATUS.continue;\n}\n")])])]),e("p",[t._v("四、扩展一个简单的填色游戏就完成了,我们可以试着魔改一下,比如:加入颜色混合,多颜色混合成同色等.加入关卡,地图不一定规则图案")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.yuque.com/yw8upm/hoz8zc/lgd98u"}},[t._v("原文链接")]),t._v(" ​")])])}),[],!1,null,null,null);n.default=i.exports}}]);