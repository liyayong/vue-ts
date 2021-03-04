export function Confim(params:any) {
    console.log(params)
    params.prototype.run = function() {
        console.log('我是一个run方法')
    }
}