//起動されたときに呼ばれる
window.addEventListener("load", () => {
    initialize();

    loop();
})

let frame;

function initialize(){
    //フィールドを描く
    Field.initialize();

    //テキストを描く
    TextController.initialize();

    frame = 0;
}



function loop(){
    TextController.update();

    frame++;
    //1/60秒後にもう一度呼び出す
    requestAnimationFrame(loop);
}