module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // 主要用来处理元素容器宽高比。在实际使用的时候，具有一个默认的结构
        "postcss-aspect-ratio-mini": {},
        // 插件主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理
        "postcss-write-svg": {
            utf8: false
        },
        // 其实就是cssnext。该插件可以让我们使用CSS未来的特性
        "postcss-cssnext": {},
        // 主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一。
        "postcss-px-to-viewport": {
            viewportWidth: 750, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 1334, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // (Sring) 指定需要转换成的视窗单位，建议使用
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false // (Boolean) 允许在媒体查询中转换`px`
        },
        // 主要是给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作。
        "postcss-viewport-units": {},
        // 主要用来压缩和清理CSS代码。在Webpack中，cssnano和css-loader捆绑在一起，所以不需要自己加载它。不过你也可以使用postcss-loader显式的使用cssnano。禁用某个插件可以设置false
        "cssnano": {
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false // 不设置flase，z-index的值就会重置为1
        }

    }
}

/*
	在不想要把px转换为vw的时候，首先在对应的元素（html）中添加配置中指定的类名.ignore或.hairlines(.hairlines一般用于设置border-width:0.5px的元素中)：
	<div class="box ignore"></div>
	.ignore { margin: 10px; background-color: red; }
	.box { width: 180px; height: 300px; }
	.hairlines { border-bottom: 0.5px solid red; }
*/

/*
	<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
*/