class PeopleController{

    static initialize(){
        //人の画像を配置
        const people1 = document.createElement("img");
        people1.src = "img/people.png";
        people1.style.width = "100px";

        const people2 = document.createElement("img");
        people2.src = "img/people.png";
        people2.style.width = "100px";

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