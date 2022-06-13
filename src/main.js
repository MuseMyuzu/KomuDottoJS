//起動されたときに呼ばれる
window.addEventListener("load", () => {
    initialize();

    loop();
})

let frame;
let mode;

function initialize(){
    //フィールドを描く
    Field.initialize();

    //ボタンを描く
    Start.initialize();
    
    //テキストを描く
    TextController.initialize();

    frame = 0;
    mode = 0;
}



function loop(){
    switch(mode){
        case 0: 
        //スタートの処理
            mode = 1; 
            break;
        case 1: 
            const flag = TextController.update();
            if(flag == true) mode = 2;
            break;
        case 2: 
            //クリアの処理
            break;
    }
    

    frame++;
    //1/60秒後にもう一度呼び出す
    requestAnimationFrame(loop);
}