(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{483:function(t,a,s){"use strict";s.r(a);var n=s(23),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"项目实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目实践"}},[t._v("#")]),t._v(" 项目实践")]),t._v(" "),s("h3",{attrs:{id:"论文与专利"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#论文与专利"}},[t._v("#")]),t._v(" 论文与专利")]),t._v(" "),s("p",[t._v("1、"),s("a",{attrs:{href:"https://herasu.github.io/2019/10/30/%E4%B8%80%E7%A7%8D%E5%BF%AB%E9%80%9F%E3%80%81%E4%B8%8D%E5%8C%BA%E5%88%86%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%A3%80%E6%B5%8B%E6%81%B6%E6%84%8FWeb%E5%86%85%E5%AE%B9%E7%9A%84%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"}},[t._v("与前端相关的深度学习论文"),s("OutboundLink")],1),s("br"),t._v("\n包括其他的文章也不错"),s("br"),t._v("\n2、2022 年 1 月投了一篇深度学习的中文核心，一个月修改后录用"),s("br"),t._v("\n刘之航, 钟玉华. 基于 CNN-BiLSTM 的可解释性轴承故障诊断[J]. 组合机床与自动化加工技术, 2022."),s("br"),t._v("\n3、2022.5 投了一篇国内会议"),s("br"),t._v("\n刘之航, 钟玉华, 李巍华, 陈祝云. 基于改进梯度权重类激活映射的一维卷积可解释性研究[C]. ~, 2022."),s("br"),t._v("\n4、2021.12 发明专利录用 深度学习可解释性")]),t._v(" "),s("h3",{attrs:{id:"日常项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日常项目"}},[t._v("#")]),t._v(" 日常项目")]),t._v(" "),s("p",[t._v("1、three.js 开发跳一跳微信小游戏")]),t._v(" "),s("ul",[s("li",[t._v("继续vx小游戏的开发实践——跳一跳。vx小游戏特点：借助小程序平台、轻量级。较多使用3.js，原生的webgl开发效率低、没有封装")]),t._v(" "),s("li",[t._v("了解webGL渲染管线")]),t._v(" "),s("li",[t._v("vx小游戏的优点：微信平台流量大、轻量级(不用单独安装app)、随项目深入理解webGL+可视化的内容、微信底层对小游戏进行了性能优化(哪些优化？)")]),t._v(" "),s("li",[t._v("three.js封装了webGL，相当于Vue之于JS。webGL:提供使浏览器具有产生3D场景能力的接口(调用GPU)")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://chenpipi.cn/post/shader-quickstart-glsles-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("着色器语法：GLSL ES，是一种类 C 语言"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLProgram",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebGLProgram"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * webGL的一个Demo\n * 上下文、创建程序、创建着色器、给程序添加着色器、连接程序与上下文\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取画布")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myCanvas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取3d上下文(webgl)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webgl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProgram")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createShader")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" shader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建顶点着色器和片元着色器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var vertexShader, fragmentShader;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vertexShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VSHADER_SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERTEX_SHADER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragmentShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FSHADER_SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FRAGMENT_SHADER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加着色器")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vertexShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fragmentShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接webgl上下文和程序program")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("linkProgram")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useProgram")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("program "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("笔记："),s("br"),t._v("\n1、相机 camera："),s("br"),t._v("\n1.1、正交相机：远近端一样大"),s("br"),t._v("\n1.2、透视相机：近大远小")]),t._v(" "),s("p",[t._v("2、ThREE.WebGLRenderer 作用：渲染器，将渲染的结果放到 canvas 画布上"),s("br"),t._v("\n3、渲染器要渲染的元素定义在 THREE.Scene 中，包括 Object、Texture、Light、全局坐标"),s("br"),t._v("\n4、将全局坐标转换为相机坐标系中的坐标"),s("br"),t._v(" "),s("img",{attrs:{src:"/blog/assets/img/scene.png",alt:"基本渲染场景"}})]),t._v(" "),s("h3",{attrs:{id:"开发效率工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发效率工具"}},[t._v("#")]),t._v(" 开发效率工具")]),t._v(" "),s("p",[t._v("tabnine 和 copilot")]),t._v(" "),s("h3",{attrs:{id:"开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),s("p",[t._v("1、后端开发："),s("br"),t._v("\n理解需求、关键功能技术评审、设计表结构、设计接口文档、接口功能实现、接口联调自测提测"),s("br"),t._v("\n2、mock"),s("br"),t._v("\n地址前缀: http://localhost:3000/api")]),t._v(" "),s("h3",{attrs:{id:"软考高项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软考高项"}},[t._v("#")]),t._v(" 软考高项")]),t._v(" "),s("p",[t._v("考试题型："),s("br"),t._v(" "),s("b",[t._v("(注意练字)")])]),t._v(" "),s("ul",[s("li",[t._v("综合知识：75道选择题(涂卡)，包括IT知识、项目管理知识、时事新闻、运筹学、英语题")]),t._v(" "),s("li",[t._v("案例分析：3道题*25分，问答(理论)题和计算题，前者包括找错、改错、选择、填空、判断、默写；后者包括画图、计算、默写")]),t._v(" "),s("li",[t._v("论文：二选一(不要背范文)，背景500字、过渡200字、过程1200字、结尾300字，一共2k-2k5b字，背景、过渡和结尾这三部分都是要提前背好的，过程部分也要背一部分，所以到考场只要发挥5-600字")])])])}),[],!1,null,null,null);a.default=r.exports}}]);