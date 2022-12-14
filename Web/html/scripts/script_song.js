var stage, velocidad, text;
let velocidad_reproducion;
let velocidad_audio;
var urlParams = new URLSearchParams(window.location.search);
var audio;
async function init(){
    stage = new createjs.Stage("partitura");
    // Añadimos framerate
    createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate=60;
    // Añadimos evento para actualizar cada tick
    createjs.Ticker.addEventListener("tick", stage);
    var background = new createjs.Shape();
    background.graphics.beginFill("#5b4d3f").drawRect(0,0,350,500);
    stage.addChild(background);
    var palo = new createjs.Shape();
    palo.graphics.beginFill("#FFFFFF").drawRect(15,0,5,500);
    stage.addChild(palo);
    
    getName(urlParams.get('song'))
    .then((result) => {
        document.getElementById("name_song").innerHTML = result[0].name;
        document.getElementById("bmp").innerHTML = result[0].bmp + " BMP - " + result[0].bb + " BB";
        audio = new Howl({
            src: ['../data/'+result[0].song_url]
          });
        text = [];
        for(let i=0; i<6; i++){
            text.push(new createjs.Text(result[0].lines[i], "50px Courier New", "#ffffff"));
        }
        let bms = result[0].bmp/60;
        let sec = 1/bms;
        velocidad_reproducion=sec*result[0].bb;
        velocidad_audio=1;
        let starting_pos_y=35;
        for(i=0; i<text.length; i++){
            text[i].x=25;
            text[i].y=starting_pos_y;
            starting_pos_y=starting_pos_y+75;
            stage.addChild(text[i]);   
        }
    })
    .catch(e => console.log(e));
    stage.update();
}

function iniciarPentagrama() { 
    if(text){
        audio.play();
        createjs.Ticker.addEventListener("tick", mover_texto);
    }
};

function stopPentagrama() {
    audio.pause();
    createjs.Ticker.removeEventListener("tick", mover_texto);
};

function restartPentagrama() { 
    stopPentagrama();
    audio.stop();
    for(i=0; i<text.length; i++){
        text[i].x=25;  
    }
    stage.update();
};
function reducirVelocidad(){
    if(velocidad_reproducion > 0.4) {
        velocidad_reproducion-=0.25;
        velocidad_audio-=0.1;
        audio.rate(velocidad_audio);
    }
}
function aumentarVelocidad(){
    if(velocidad_reproducion<15){
        velocidad_reproducion+=0.25;
        velocidad_audio+=0.1;
        audio.rate(velocidad_audio);
    }
}
function restaurarVelocidad(){
    velocidad_reproducion=2.16;
    velocidad_audio=1;
    audio.rate(velocidad_audio);
}
function mover_texto(event){
    for(i=0; i<text.length; i++){
        text[i].x=text[i].x-velocidad_reproducion; 
    }
    if(text[1].x < stage.canvas.witdh) stopPentagrama();
    stage.update(event);
}
