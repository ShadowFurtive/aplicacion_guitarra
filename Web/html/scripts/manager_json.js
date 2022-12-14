
const url_json='../data/songs.json';

var name2value={};
var my_lista_canciones=null;

async function getName(Name){    
    if (name2value[Name]) return name2value[Name];

    console.log("getName "+Name);

    let lista_canciones=await fetch(url_json)
    .then((response)=>response.json())
    .then((responseJson)=>{return responseJson});

    name2value[Name]=lista_canciones.canciones.filter(elemento => elemento.name === Name);
    return name2value[Name];
}

async function getAllNames(){    
    if (my_lista_canciones) return my_lista_canciones;

    console.log("getAllNames");

    let lista_canciones=await fetch(url_json)
    .then((response)=>response.json())
    .then((responseJson)=>{return responseJson});
    var obj=[];
    for (const i in lista_canciones.canciones){
        obj.push(lista_canciones.canciones[i].name);
    }
    my_lista_canciones = obj.map(element => ({
        name: element
    }));
    return my_lista_canciones;
}