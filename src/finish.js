class Finish{
    //不要な要素を見えなくする
    static hideImage(){
        const textElement = document.getElementById("text");
        textElement.style.display = "none";

        const collisionImg = document.getElementById("collision");
        collisionImg.style.display = "none";

        const people = document.getElementById("peopleDiv");
        people.style.display = "none";
    }

    //結果を表示する
    static showResult(resultText){
        const result = document.createElement("span");
        result.innerHTML = resultText;
        result.style.color = "#fff";
        result.style.fontFamily = Config.FONT_FAMILY;
        result.style.fontSize = "56px";
        result.style["-webkit-text-stroke"] = "3" + "px " + "#000";
        result.style.textStroke = "3" + "px " + "#000";
        result.style.whiteSpace = "pre";

        const div = document.getElementById("resultDiv");
        div.appendChild(result);
    }

    //ボタンを作成する
    static createButton(){
        //スタートボタンの作成
        const retryButton = document.createElement("button");
        retryButton.type = "button";
        retryButton.innerHTML = "もう一度";
        retryButton.style.fontFamily = Config.FONT_FAMILY;
        retryButton.style.color = "#fff";
        retryButton.style.background = "#f56500";
        retryButton.style.borderRadius = "100vh";
        retryButton.style.width = "300px";
        retryButton.style.fontSize = "48px";
        retryButton.style.border = "none";

        //ツイートボタンの作成
        const tweetButton = document.createElement("button");
        tweetButton.type = "button";
        tweetButton.innerHTML = "ツイート";
        tweetButton.style.fontFamily = Config.FONT_FAMILY;
        tweetButton.style.color = "#fff";
        tweetButton.style.background = "#1d9bf0";
        tweetButton.style.borderRadius = "100vh";
        tweetButton.style.width = "300px";
        tweetButton.style.fontSize = "48px";
        tweetButton.style.marginTop = "20px";
        tweetButton.style.border = "none";

        //スタートボタンが押されたとき
        retryButton.addEventListener("click",
        function(){
            //リロード
            location.reload();
        })

        //ツイートボタンが押されたとき
        tweetButton.addEventListener("click",
        function(){
            const tweet = "コムドット様に" + Main.dodgeCount + "回\n"
                +"道をお譲りしました。\n" 
                +"#コムドット\n"
                +"";
            //クリップボードにコピー
            navigator.clipboard.writeText(tweet)
                .then(
                    success => alert("クリップボードにコピーしました。"),
                    error => alert("クリップボードにコピーできませんでした。")
                );
        })

        const div = document.getElementById("buttonDiv");
        div.appendChild(retryButton);
        div.appendChild(tweetButton);
    }

    //終了画面を表示
    static finish(resultText){
        this.hideImage();
        this.showResult(resultText);
        this.createButton();
    }
}