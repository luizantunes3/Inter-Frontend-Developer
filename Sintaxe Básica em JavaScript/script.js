//Tipos de variáveis
var a = true;
var b;
let c;
const d = 2;


function exemploObjeto(){
    var objeto = new Object({
        'Cadeira':'10',
        'Mesa':'10'
    });

    alert(objeto.Mesa);
}

async function exemploPromessa(){
 const myPromisse = new Promisse((resolve, reject) => {
     window.setTimeout(() => {
         resolve('resolvida!');
     }, 2000);
 });

 const resolved = await myPromisse
    .then((result ) => result + ' passando pelo then')
    
    return resolved;
}

function exemploErro(){
    const exemploErro = new Error('Ops, houve um problema');
    exemploErro.name = 'Problema001';
    throw exemploErro;
}

function exemploSet(){
    const mySet = new Set();

    mySet.add(2);
    mySet.add(5);
    mySet.add(10);

    alert(mySet.has(2));
}

function exemploMap(){
    const myMap = new Map();
     myMap.set('ContaCC', '2.500');
     myMap.set('ContaPoupança', '100.00');

     alert(myMap.get('ContaPoupança'));

}

function exemploArray (){
    var array = ['Luiz', 'Fernando'];
    alert(array);
}