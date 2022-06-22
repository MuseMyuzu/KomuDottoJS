class Start{
    static initialize(){
        
        //画像等の調整
        const container = document.getElementsByClassName("container")[0];
        container.style.width = Config.FIELD_X + "px";
        container.style.height = Config.FIELD_Y + "px";

        const road = document.getElementById("road");
        road.style.width = Config.FIELD_X + "px";
        road.style.height = Config.FIELD_Y + "px";

        //スタートボタンの作成
        const startButton = document.createElement("button");
        startButton.type = "button";
        startButton.innerHTML = "スタート";
        startButton.style.fontFamily = Config.FONT_FAMILY;
        startButton.style.color = "#fff";
        startButton.style.background = "#f56500";
        startButton.style.borderRadius = "100vh";
        startButton.style.width = Config.BUTTON_W + "px";
        startButton.style.fontSize = Config.BUTTON_FONT_SIZE + "px";
        startButton.style.border = "none";
        startButton.style.setProperty("filter", Config.BUTTON_SHADOW_SETTING);

        //スタートボタンが押されたとき
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

            //BGMを消す
            AudioController.pauseBGM();
            //決定ボタンを鳴らす
            AudioController.playEnter();

            //少し待ったらスタート
            setTimeout(function(){
                //ゲームのBGMを鳴らす
                AudioController.playGameBGM();
    
                //衝突チェックからスタート
                Main.mode = "collision";
            }, Config.ENTER_LENGTH);
        })

        const div = document.getElementById("buttonDiv");
        div.appendChild(startButton);
    }
}