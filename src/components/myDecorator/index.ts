export const resetList = () =>{
    return function(target:{[key:string]:any},name:string,descriptor:{[key:string]:any}){
        const fn = descriptor.value
        descriptor.value = function() {
            this.isLoading = false;
            this.page = 1;
            this.list = []
            fn.call(this)
        }
    }
}