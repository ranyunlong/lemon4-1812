// es6 模块语法
// 基于ecmascript 的模块语法 nodejs 现在是在测试阶段还不能运行


// const test = require('./test') // nodejs的方式
// 按需导入

// import test, {  bb, test1, test as xx  } from './test'   // es6的导入方式

// console.log(test, bb, test1, xx)


// import test from './test'
// 这种方式是导入test.js文件里的export default

// 导入模块里的所有导出的东西 默认导出 和按需导出

import { sum, format, run, text } from './test'

console.log(sum(1,2))

console.log(format(new Date()))

text('xx111')

// 默认导出

// 按需导出

// 按需和默认一起导出

// 附带导出其他模块的方法或成员

// 全导入

// 按需导入

// 按需和默认一起导入