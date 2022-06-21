//画像等のスケール調整用
class Scale{
    static initialize(){
        window.addEventListener("resize", this.scaling);

        //まず、強制的にスケール調整
        this.scaling();

        //画像等の調整
        const container = document.getElementsByClassName("container")[0];
        container.style.width = Config.FIELD_X + "px";
        container.style.height = Config.FIELD_Y + "px";

        const road = document.getElementById("road");
        road.style.width = Config.FIELD_X + "px";
        road.style.height = Config.FIELD_Y + "px";

        console.log("FIELD X = "+Config.FIELD_X);
    }

    static scaling(){
        if(navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)){
            //スマホ使用
        }
        else{
            //PC・タブレット使用
        }

        Config.FIELD_X = 400;
        Config.FIELD_Y = 640;
    }
}