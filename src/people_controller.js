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
        this.people1.style.width = Config.PEOPLE_WIDTH + "px";
        this.people1.style.top = Config.PEOPLE2_TOP + "px";
        this.people1.style.left = (Config.FIELD_X - Config.LEFT_MIN) + "px";
        this.people1.style.setProperty("filter", Config.PEOPLE_SHADOW_SETTING);
        //左に100%動かす（座標の基準が画像の右上になる）
        this.people1.style.transform = "translate(-100%, 0%)"

        //右の人の画像を配置
        this.people2 = document.createElement("img");
        this.people2.src = "img/people.png";
        this.people2.style.position = "absolute";
        this.people2.style.width = Config.PEOPLE_WIDTH + "px";
        this.people2.style.top = Config.PEOPLE2_TOP + "px";
        this.people2.style.left = Config.LEFT_MIN + "px";
        this.people2.style.setProperty("filter", Config.PEOPLE_SHADOW_SETTING);

        //画像をdiv要素に入れる
        const div = document.getElementById("peopleDiv");
        div.appendChild(this.people1);
        div.appendChild(this.people2);

        //背景をクリックしたときの操作
        const clikArea = document.body;

        //画像をタッチしたらisTouchをtrue
        clikArea.addEventListener(this.getEventTypeStart() , function() {
            console.log("mousedown");
            PeopleController.isTouch = true;
        });

        //タッチを辞めたらisTouchをfalse
        clikArea.addEventListener(this.getEventTypeEnd() , function() {
            console.log("mouseup");
            PeopleController.isTouch = false;
        });
    }

    //スマホかPCかで変更する
    static getEventTypeStart(){
        return (window.ontouchstart === (null || undefined)) ? "mousedown" : "touchstart";
    }

    static getEventTypeEnd(){
        return (window.ontouchstart === (null || undefined)) ? "mouseup" : "touchend";
    }

    //タッチしている間、人を動かす
    static movePeople(){
        //右の人のleftを取得
        let left = parseInt(this.people2.style.left);
        //右端に着くまで
        if(left < Config.LEFT_MAX){
            //右へ動かす
            left += 5.0;
        }
        else{
            //端まで行ったらMAXの値を代入
            left = Config.LEFT_MAX;
        }
        //画像のleftに反映
        this.people1.style.left = (Config.FIELD_X - left) + "px";
        this.people2.style.left = left + "px";
    }

    //タッチしてないとき、人を戻す
    static returnPeople(){
        let left = parseInt(this.people2.style.left);
        if(Config.LEFT_MIN < left){
            left -= 5.0;
        }
        else{
            left = Config.LEFT_MIN;
        }
        this.people1.style.left = (Config.FIELD_X - left) + "px";
        this.people2.style.left = left + "px";
    }
}