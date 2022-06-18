//起動時
window.addEventListener("load", () => {
    //ボタン等を表示
    Main.initialize();
})

class Main{
    static mode;
    static collidingTime;

    //起動時に呼ばれる初期化関数
    static initialize(){

        //スタート画面を初期化
        Start.initialize();

        Main.mode = "start";
        Main.collidingTime = 0;
        
        //ループを開始
        Main.loop();
    }



    static loop(){
        switch(Main.mode){
            case "start": 
                //スタートの処理
                break;
            case "collision": 
                //衝突判定。ぶつかったらtrueが返る
                const collisioin = Collider.checkCollision();
                console.log("collision->"+collisioin);

                Main.mode = collisioin ? "colliding" : "moveText";

                break;
            case "colliding":
                //衝突中（少しゲームを止める）
                Main.collidingTime++;

                if(Main.collidingTime < Config.COLLIDING_TIME_MAX) {
                    break;
                }else{
                    Main.collidingTime = 0;
                }

                //ゲームオーバーかどうか
                if(TextController.isKomudotto){
                    //コムドットが流れてきたとき
                    Main.mode = "gameover";
                    break;
                }
                else {
                    //衝突後は、テキストを上に戻す
                    TextController.nextPrepare();
                    Main.mode = "collision";
                }
                break;
            case "moveText":
                //テキストを動かす
                const flag = TextController.update();
                if(flag == true) Main.mode = "clear";

                if(TextController.isBottom){
                    if(!TextController.isKomudotto){
                        //テキストが下端に来るまでよけてしまったら
                        Main.mode = "gameover";
                        break;
                    }else{
                        //テキストを変更して上に移動
                        TextController.nextPrepare();
                        break;
                    }
                }

                Main.mode = "movePeople";
                break;
            case "movePeople":
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
                Finish.clear();
                break;
            case "gameover":
                //ゲームオーバーの処理
                Finish.gameOver();
                break;
        }
        
        //1/60秒後にもう一度呼び出す
        requestAnimationFrame(Main.loop);
    }
}

