

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
    if (Virada['a1'] == false) {
        Sorteio(a1)
        Virada['a1'] = true
    }
});
a2.addEventListener("click", () => {
    if (Virada['a2'] == false) {
        Sorteio(a2)
        Virada['a2'] = true
    }
});
a3.addEventListener("click", () => {
    if (Virada['a3'] == false) {
        Sorteio(a3)
        Virada['a3'] = true
    }
});

b1.addEventListener("click", () => {
    if (Virada['b1'] == false) {
        Sorteio(b1)
        Virada['b1'] = true
    }
});
b2.addEventListener("click", () => {
    if (Virada['b2'] == false) {
        Sorteio(b2)
        Virada['b2'] = true
    }
});
b3.addEventListener("click", () => {
    if (Virada['b3'] == false) {
        Sorteio(b3)
        Virada['b3'] = true
    }
});

c1.addEventListener("click", () => {
    if (Virada['c1'] == false) {
        Sorteio(c1)
        Virada['c1'] = true
    }
});
c2.addEventListener("click", () => {
    if (Virada['c2'] == false) {
        Sorteio(c2)
        Virada['c2'] = true
    }
});
c3.addEventListener("click", () => {
    if (Virada['c3'] == false) {
        Sorteio(c3)
        Virada['c3'] = true
    }
});

d1.addEventListener("click", () => {
    if (Virada['d1'] == false) {
        Sorteio(d1)
        Virada['d1'] = true
    }
});
d2.addEventListener("click", () => {
    if (Virada['d2'] == false) {
        Sorteio(d2)
        Virada['d2'] = true
    }
});
d3.addEventListener("click", () => {
    if (Virada['d3'] == false) {
        Sorteio(d3)
        Virada['d3'] = true
    }
});

e1.addEventListener("click", () => {
    if (Virada['e1'] == false) {
        Sorteio(e1)
        Virada['e1'] = true
    }
});
e2.addEventListener("click", () => {
    if (Virada['e2'] == false) {
        Sorteio(e2)
        Virada['e2'] = true
    }
});
e3.addEventListener("click", () => {
    if (Virada['e3'] == false) {
        Sorteio(e3)
        Virada['e3'] = true
    }
});

f1.addEventListener("click", () => {
    if (Virada['f1'] == false) {
        Sorteio(f1)
        Virada['f1'] = true
    }
});
f2.addEventListener("click", () => {
    if (Virada['f2'] == false) {
        Sorteio(f2)
        Virada['f2'] = true
    }
});
f3.addEventListener("click", () => {
    if (Virada['f3'] == false) {
        Sorteio(f3)
        Virada['f3'] = true
    }
});