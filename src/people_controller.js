class PeopleController{

    static initialize(){
        //人の画像を配置
        const people1 = document.createElement("img");
        people1.src = "img/people.png";
        people1.style.position = "absolute";
        people1.style.width = "200px";
        people1.style.top = Config.PEOPLE2_TOP + "px";
        people1.style.left = (Config.FIELD_X - Config.PEOPLE2_LEFT) + "px";
        //左に100%動かす（座標の基準が画像の右上になる）
        people1.style.transform = "translate(-100%, 0%)"

        const people2 = document.createElement("img");
        people2.src = "img/people.png";
        people2.style.position = "absolute";
        people2.style.width = "200px";
        people2.style.top = Config.PEOPLE2_TOP + "px";
        people2.style.left = Config.PEOPLE2_LEFT + "px";

        const div = document.getElementById("peopleDiv");
        div.appendChild(people1);
        div.appendChild(people2);

        //背景をクリックしたときの操作
        const road = document.getElementById("road");

        road.addEventListener("touchstart", () => {
            this.movePeople();
        })

        road.addEventListener("touchend", () => {
            this.returnPeople();
        })
    }

    static movePeople(){

    }

    static returnPeople(){

    }
}