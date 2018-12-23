export default function() {
    console.log('test')
}


export function sum(a, b) {
    return a + b
}

export function run() {
    alert('100')
}

// 附带导出format模块里所有的方法
export * from './format'
export { format, run as text } from './format'
