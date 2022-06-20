class Audio{
    static isMute;

    static initialize(){
        //最初はミュート
        this.isMute = true;

        const soundButton = document.getElementById("soundImg");
        soundButton.style.top = "10px";
        soundButton.style.left = (Config.FIELD_X - 10) + "px";
        //画像の原点を右上にする
        soundButton.style.transform = "translate(-100%, 0%)";

        const bgm = document.getElementById("bgm");

        soundButton.addEventListener("click", function(){
            if(this.isMute){
                //ミュートの時
                //ミュートを解除する
                //画像を変更
                soundButton.src = "img/unmute.png";
                bgm.muted = false;
                this.isMute = false;
            }
            else{
                //ミュートじゃなかったとき
                //ミュートにする
                //画像を変更
                soundButton.src = "img/mute.png";
                bgm.muted = true;
                this.isMute = true;
            }
        })
    }
}