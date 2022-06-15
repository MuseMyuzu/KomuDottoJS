//起動時
window.addEventListener("load", () => {
    //ボタン等を表示
    Main.initialize();
})

class Main{
    static mode;

    //起動時に呼ばれる初期化関数
    static initialize(){

        //スタート画面を初期化
        Start.initialize();

        this.mode = "start";
        
        //ループを開始
        this.loop();
    }



    static loop(){
        switch(Main.mode){
            case "start": 
                //スタートの処理
                break;
            case "collision": 
                //衝突判定。ぶつかったらtrueが返る
                const collisioin = Collider.checkCollision();
                Main.mode = "moveText";
                break;
            case "moveText":
                //テキストを動かす
                const flag = TextController.update();
                if(flag == true) Main.mode = "clear";
                Main.mode = "movePeople";
                break;
            case "movePeople":
                console.log(PeopleController.isTouch);
                //人画像を動かす
                if(PeopleController.isTouch){
                    //タッチしているとき
                    PeopleController.movePeople();
                }
                else{
                    //タッチしていないとき
                    PeopleController.returnPeople();
                }
                Main.mode = "collision";
                break;
            case "clear": 
                //クリアの処理
                break;
        }
        
        //1/60秒後にもう一度呼び出す
        requestAnimationFrame(Main.loop);
    }
}

