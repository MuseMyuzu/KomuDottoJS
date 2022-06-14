//起動時
window.addEventListener("load", () => {
    //ボタン等を表示
    Main.initialize();
})

class Main{
    static mode;

    static initialize(){

        Start.initialize();

        this.mode = 0;

        this.loop();
    }



    static loop(){
        switch(Main.mode){
            case 0: 
                //スタートの処理
                break;
            case 1: 
                const flag = TextController.update();
                if(flag == true) Main.mode = 2;

                if(Collider.checkCollision()){
                    //ぶつかった
                    Main.mode = 2;
                }
                break;
            case 2: 
                //クリアの処理
                break;
        }
        
        //1/60秒後にもう一度呼び出す
        requestAnimationFrame(Main.loop);
    }
}

