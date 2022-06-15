class PeopleController{
    static isTouch;
    static people1;
    static people2;

    static initialize(){
        this.isTouch = false;

        //左の人の画像を配置
        this.people1 = document.createElement("img");
        this.people1.src = "img/people.png";
        this.people1.style.position = "absolute";
        this.people1.style.width = "200px";
        this.people1.style.top = Config.PEOPLE2_TOP + "px";
        this.people1.style.left = (Config.FIELD_X - Config.LEFT_MIN) + "px";
        //左に100%動かす（座標の基準が画像の右上になる）
        this.people1.style.transform = "translate(-100%, 0%)"

        //右の人の画像を配置
        this.people2 = document.createElement("img");
        this.people2.src = "img/people.png";
        this.people2.style.position = "absolute";
        this.people2.style.width = "200px";
        this.people2.style.top = Config.PEOPLE2_TOP + "px";
        this.people2.style.left = Config.LEFT_MIN + "px";

        //画像をdiv要素に入れる
        const div = document.getElementById("peopleDiv");
        div.appendChild(this.people1);
        div.appendChild(this.people2);

        //背景をクリックしたときの操作
        const road = document.getElementById("road");

        //画像をタッチしたらisTouchをtrue
        road.addEventListener("touchstart" , function() {
            console.log("touchstart");
            this.isTouch = true;
        });

        //タッチを辞めたらisTouchをfalse
        road.addEventListener("touchend", function() {
            this.isTouch = false;
        });
    }

    //タッチしている間、人を動かす
    static movePeople(){
        const left = parseInt(this.people2.style.left);
        if(left < Config.LEFT_MAX){
            left += 5.0;
        }
        this.people2.style.left = left + "px";
    }

    //タッチしてないとき、人を戻す
    static returnPeople(){
        const left = parseInt(this.people2.style.left);
        if(Config.LEFT_MIN < left){
            left -= 5.0;
        }
        this.people2.style.left = left + "px";
    }
}