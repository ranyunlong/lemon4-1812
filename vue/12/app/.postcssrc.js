// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // "postcss-pixel-to-viewport": {
    //   "viewportWidth": 720,        // 设计稿的宽度
    //   "viewportUnit": 'vmin',      // 预设计算单位
    //   // "propertyBlacklist": [/^.mu-/],       // 要过滤的黑名单
    //   "minPixelValue": 2,            // 要转换的px最小的数值
    //   "enableConvertComment" : 'on',
    //   "disableConvertComment": 'off',
    //   "mediaQuery": false 
    // }
    "postcss-px-to-viewport": {
      viewportWidth: 720,           // 设计稿的宽度
      // viewportHeight: 568,       // 设计稿的高度
      unitPrecision: 5,             // 计算精度
      viewportUnit: 'vmin',           // 预设计算单位
      selectorBlackList: [ 'mint' ],        // 选择器黑名单
      minPixelValue: 1,             // 要计算的最小值
      mediaQuery: false             // 是否处理媒介查询
    }
  }
}
