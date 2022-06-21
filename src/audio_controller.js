class AudioController{
    static isMute;
    static bgm;

    static initialize(){
        //最初はミュート
        this.isMute = true;

        const soundButton = document.getElementById("soundImg");
        soundButton.style.top = "10px";
        soundButton.style.left = (Config.FIELD_X - 10) + "px";
        //画像の原点を右上にする
        soundButton.style.transform = "translate(-100%, 0%)";

        this.bgm = new Audio();
        this.bgm.loop = true;
        this.bgm.muted = true;

        soundButton.addEventListener("click", function(){
            if(AudioController.isMute){
                //ミュートの時
                //ミュートを解除し、音を鳴らす
                AudioController.bgm.muted = false;
                AudioController.playTitleBGM();
                //画像を変更
                soundButton.src = "img/unmute.png";
                AudioController.isMute = false;
            }
            else{
                //ミュートじゃなかったとき
                //ミュートにして音を止める
                AudioController.bgm.muted = true;
                AudioController.pauseBGM();
                //画像を変更
                soundButton.src = "img/mute.png";
                AudioController.isMute = true;
            }
        })
    }

    static playTitleBGM(){
        this.bgm.src = "audio/title_road.mp3";
        this.bgm.play();
    }

    static playGameBGM(){
        this.bgm.src = "audio/MaouDamashiiLoop_8bit29.mp3";
        this.bgm.play();
    }

    static pauseBGM(){
        this.bgm.pause();
    }

    //決定ボタンの音を鳴らす
    static playEnter(){
        if(!this.isMute){
            const se = new Audio("audio/enter.mp3");
            se.play();
        }
    }

    //衝突の音を鳴らす
    static playCollision(){
        if(!this.isMute){
            const se = new Audio("audio/collision.mp3");
            se.play();
        }
    }

    //クリアの音を鳴らす
    static playClear(){
        if(!this.isMute){
            const se = new Audio("audio/success.mp3");
            se.play();
        }
    }

    //ゲームオーバーの音を鳴らす
    static playGameOver(){
        if(!this.isMute){
            const se = new Audio("audio/miss.mp3");
            se.play();
        }
    }
}