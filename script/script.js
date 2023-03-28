const display=window.document.querySelector('.display')
const c=window.document.querySelector('.c')
const ac=window.document.querySelector('.ac')
const num=window.document.querySelectorAll(".num")
const ponto=window.document.querySelector('.ponto')
const op=window.document.querySelectorAll('.op')
const res=window.document.querySelector('.res')


ac.addEventListener('click',()=>{
    display.innerHTML="0"
})
c.addEventListener('click',()=>{
    let a_disply=[...display.innerHTML]
    if(a_disply.length==1){
        display.innerHTML="0"
    } else{
        if(a_disply[a_disply.length-1]=='('){
            iA--
        } else if(a_disply[a_disply.length-1]==')'){
            iF--
        }
        a_disply.pop()
        display.innerHTML=''
        a_disply.map((el)=>{
            display.innerHTML+=el
        })
    }
})

num.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if(display.innerHTML=="0"){
            display.innerHTML=''
        }
        display.innerHTML+=evt.target.innerHTML
        sinal=true
    })
})

let deciamal=true
let sinal=true
ponto.addEventListener('click',()=>{
    if(deciamal){
        display.innerHTML+="."
        deciamal=false
    }
})

const parA=window.document.querySelector('.parA')
let iA=0
const parF=window.document.querySelector('.parF')
let iF=0
parA.addEventListener('click',()=>{
    if(display.innerHTML=="0"){
        display.innerHTML='('
    } else{
        display.innerHTML+='('
    }
    iA++
})
parF.addEventListener('click',()=>{
    if(iA>iF){
        display.innerHTML+=')'
        iF++
    }
})

op.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if(el.innerHTML=="x" && sinal){
            display.innerHTML+="*"
        } else if(sinal){
            display.innerHTML+=evt.target.innerHTML
        }
        sinal=false
        deciamal=true
    })
})

res.addEventListener('click',()=>{
    if(iA==iF){
        display.innerHTML=(eval(display.innerHTML))
    } else if(iA!==iF){
        window.alert('[ ERRO ] Feche o parêntese')
    }
})