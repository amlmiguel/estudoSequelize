//-------  THEN
const promiseComArgs = (argumento) => new Promise((resolve, reject) => {
    if(argumento > 1000){
        setTimeout(() => {
            resolve("O argumento é válido(then)")
        }, argumento);
    }else{
    reject("argumento inválido")}
}).then(function(data){
    console.log(data)
}).catch(function(error){
console.log(error)
})
 promiseComArgs(4000)
//--------------fim
//----- função async
const promiseComArgsfun = (argumento) => new Promise((resolve, reject) => {
    if(argumento > 1000){
        setTimeout(() => {
            resolve("O argumento é válido (Função Async)")
        }, argumento);
    }else{
    reject("argumento inválido")}
})
const comawait = async ()=>{
console.log( await promiseComArgsfun(3000).catch(function(error){console.log(error) }))
}
comawait()
//-----------------Fim