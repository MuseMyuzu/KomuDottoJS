class Start{
    static initialize(){

        const startButton = document.createElement("button");
        startButton.type = "button";
        startButton.innerHTML = "スタート";
        startButton.style.color = "#fff";
        startButton.style.background = "#f56500";
        startButton.style.borderRadius = "100vh";
        startButton.style.width = "300px";
        startButton.style.fontSize = "48px";

        startButton.addEventListener("click",
        function(){

            //ボタンを消す
            startButton.style.display = "none";
            
            //テキストを表示
            TextController.initialize();

            //人を表示
            PeopleController.initialize();

            //コライダーを初期化
            Collider.initialize();

            Main.mode = 1;
        })

        const div = document.getElementById("buttonDiv");
        div.appendChild(startButton);
    }
}