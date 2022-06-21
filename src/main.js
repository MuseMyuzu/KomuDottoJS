//起動時
window.addEventListener("load", () => {
    //ボタン等を表示
    Main.initialize();
})

class Main{
    static mode;
    static collidingTime;
    //衝突したときの画像
    static collisionElement;
    //コムドットを何回よけたか
    static dodgeCount;
    //ループを続けるかのフラグ
    static loopFlag;
    //結果に表示する文章
    static resultText;

    //起動時に呼ばれる初期化関数
    static initialize(){
        //スタート画面を初期化
        Start.initialize();
        //音量ボタンを初期化
        AudioController.initialize();

        Main.mode = "start";
        Main.collidingTime = 0;
        Main.dodgeCount = 0;
        Main.loopFlag = true;
        Main.resultText = "";
        
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
                
                //衝突中の画像を表示
                Collider.showCollision();

                if(Main.collidingTime < Config.COLLIDING_TIME_MAX) {
                    break;
                }else{
                    //衝突が終わった
                    Collider.hideCollision();
                    Main.collidingTime = 0;
                }

                //ゲームオーバーかどうか
                if(TextController.isKomudotto){
                    //コムドットが流れてきたときゲームオーバー
                    AudioController.playGameOver();
                    Main.mode = "finish";
                    Main.resultText = "コムドットを\nよけられませんでした！";
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
                if(TextController.update()){
                    //クリア
                    AudioController.playClear();
                    Main.resultText = "クリア！すばらしい！";
                    Main.mode = "finish";
                    break;
                } 

                if(TextController.isBottom){
                    if(!TextController.isKomudotto){
                        //テキストが下端に来るまでよけてしまったらゲームオーバー
                        AudioController.playGameOver();
                        Main.mode = "finish";
                        Main.resultText = TextController.textElement.textContent + "を\nよけてしまいました！" ;
                        break;
                    }else{
                        //コムドットをよけた回数を1増やす
                        Main.dodgeCount++;
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
            case "finish": 
                //クリアの処理
                Finish.finish(Main.resultText);
                Main.loopFlag = false;
                break;
        }
        
        if(Main.loopFlag){
            //1/60秒後にもう一度呼び出す
            requestAnimationFrame(Main.loop);
        }
    }
}

