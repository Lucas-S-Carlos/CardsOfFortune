let podeIr = false

let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")

let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")

let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")

let e1 = document.getElementById("e1")
let e2 = document.getElementById("e2")
let e3 = document.getElementById("e3")

let f1 = document.getElementById("f1")
let f2 = document.getElementById("f2")
let f3 = document.getElementById("f3")

let Virada = {
    'a1': false, 'a2': false, 'a3': false, 
    'b1': false, 'b2': false, 'b3': false, 
    'c1': false, 'c2': false, 'c3': false, 
    'd1': false, 'd2': false, 'd3': false, 
    'e1': false, 'e2': false, 'e3': false, 
    'f1': false, 'f2': false, 'f3': false
}


a1.addEventListener("click", () => {
    if ((Virada['a1'] == false) && (podeIr == true)) {
         Virada['a1'] = true
        Sorteio(a1)
    }
});
a2.addEventListener("click", () => {
    if ((Virada['a2'] == false) && (podeIr == true)) {
        Virada['a2'] = true
        Sorteio(a2)
    }
});
a3.addEventListener("click", () => {
    if ((Virada['a3'] == false) && (podeIr == true)) {
        Virada['a3'] = true
        Sorteio(a3)
    }
});

b1.addEventListener("click", () => {
    if ((Virada['b1'] == false) && (podeIr == true)) {
        Virada['b1'] = true
        Sorteio(b1)
    }
});
b2.addEventListener("click", () => {
    if ((Virada['b2'] == false) && (podeIr == true)) {
       Virada['b2'] = true
         Sorteio(b2)
    }
});
b3.addEventListener("click", () => {
    if ((Virada['b3'] == false)&& (podeIr == true)) {
        Virada['b3'] = true
        Sorteio(b3)
    }
});

c1.addEventListener("click", () => {
    if ((Virada['c1'] == false)&& (podeIr == true)) {
        Virada['c1'] = true
        Sorteio(c1)
    }
});
c2.addEventListener("click", () => {
    if ((Virada['c2'] == false)&& (podeIr == true)) {
        Virada['c2'] = true
        Sorteio(c2)
    }
});
c3.addEventListener("click", () => {
    if ((Virada['c3'] == false)&& (podeIr == true)) {
        Virada['c3'] = true
        Sorteio(c3)
    }
});

d1.addEventListener("click", () => {
    if ((Virada['d1'] == false)&& (podeIr == true)) {
        Virada['d1'] = true
        Sorteio(d1)
    }
});
d2.addEventListener("click", () => {
    if ((Virada['d2'] == false)&& (podeIr == true)) {
        Virada['d2'] = true
        Sorteio(d2)
    }
});
d3.addEventListener("click", () => {
    if ((Virada['d3'] == false)&& (podeIr == true)) {
        Virada['d3'] = true
        Sorteio(d3)
    }
});

e1.addEventListener("click", () => {
    if ((Virada['e1'] == false)&& (podeIr == true)) {
        Virada['e1'] = true
        Sorteio(e1)
    }
});
e2.addEventListener("click", () => {
    if ((Virada['e2'] == false)&& (podeIr == true)) {
        Virada['e2'] = true
        Sorteio(e2)
    }
});
e3.addEventListener("click", () => {
    if ((Virada['e3'] == false)&& (podeIr == true)) {
        Virada['e3'] = true
        Sorteio(e3)
    }
});

f1.addEventListener("click", () => {
    if ((Virada['f1'] == false)&& (podeIr == true)) {
        Virada['f1'] = true
        Sorteio(f1)
    }
});
f2.addEventListener("click", () => {
    if ((Virada['f2'] == false)&& (podeIr == true)) {
        Virada['f2'] = true
        Sorteio(f2)
    }
});
f3.addEventListener("click", () => {
    if ((Virada['f3'] == false)&& (podeIr == true)) {
       Virada['f3'] = true
         Sorteio(f3)
    }
});

let i = 0;
function virarTudo(){
    if (Virada['a1'] == false){
        SorteioFake(a1)
    }  if (Virada['a2'] == false){
        Sorteio(a2)
    }  if (Virada['a3'] == false){
        SorteioFake(a3)
    }  if (Virada['b1'] == false){
        SorteioFake(b1)
    }  if (Virada['b2'] == false){
        SorteioFake(b2)
    } if (Virada['b3'] == false){
        SorteioFake(b3)
    }  if (Virada['c1'] == false){
        SorteioFake(c1)
    }  if (Virada['c2'] == false){
        SorteioFake(c2)
    } if (Virada['c3'] == false){
        SorteioFake(c3)
    }  if (Virada['d1'] == false){
        SorteioFake(d1)
    }  if (Virada['d2'] == false){
        SorteioFake(d2)
    } if (Virada['d3'] == false){
        SorteioFake(d3)
    }  if (Virada['e1'] == false){
        SorteioFake(e1)
    }  if (Virada['e2'] == false){
        SorteioFake(e2)
    } if (Virada['e3'] == false){
        SorteioFake(e3)
    }  if (Virada['f1'] == false){
        SorteioFake(f1)
    }  if (Virada['f2'] == false){
        SorteioFake(f2)
    } if (Virada['f3'] == false){
        SorteioFake(f3)
    } 
};
