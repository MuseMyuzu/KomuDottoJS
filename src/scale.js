//画像等のスケール調整用
class Scale{
    static initialize(){
        window.addEventListener("resize", this.scaling);

        //まず、強制的にスケール調整
        this.scaling();

        //画像等の調整
        const container = document.getElementsByClassName("container");
        container.style.width = Config.FIELD_X;
        container.style.height = Config.FIELD_Y;

        const road = document.getElementById("road");
        road.style.width = Config.FIELD_X;
        road.style.height = Config.FIELD_Y;
    }

    static scaling(){
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;

        //ウィンドウが小さくなったら、それに応じて要素を小さくする
        if(w < Config.FIELD_X_MAX){
            Config.FIELD_X = w;
        }
        if(h < Config.FIELD_Y_MAX){
            Config.FIELD_Y = h;
        }
    }
}