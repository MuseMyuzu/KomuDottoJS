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
        result.style.color = Config.RESULT_TEXT_COLOR;
        result.style.fontFamily = Config.FONT_FAMILY;
        result.style.fontSize = Config.RESULT_FONT_SIZE + "px";
        result.style["-webkit-text-stroke"] = Config.RESULT_TEXT_STROKE_SETTING;
        result.style.textStroke = Config.RESULT_TEXT_STROKE_SETTING;
        result.style.textShadow = Config.RESULT_TEXT_SHADOW_SETTING
        result.style.whiteSpace = "pre";

        const div = document.getElementById("resultDiv");
        div.appendChild(result);
    }

    //ボタンを作成する
    static createButton(){
        //スタートボタンの作成
        const retryButton = document.createElement("button");
        retryButton.type = "button";
        retryButton.innerHTML = "もういちど";
        retryButton.style.fontFamily = Config.FONT_FAMILY;
        retryButton.style.color = "#fff";
        retryButton.style.background = "#f56500";
        retryButton.style.borderRadius = "100vh";
        retryButton.style.width = Config.BUTTON_W + "px";
        retryButton.style.fontSize = Config.BUTTON_FONT_SIZE + "px";
        retryButton.style.border = "none";
        retryButton.style.setProperty("filter", Config.BUTTON_SHADOW_SETTING);

        //ツイートボタンの作成
        const tweetButton = document.createElement("a");
        tweetButton.innerHTML = "ツイート";
        const tweetURL = "https://musemyuzu.com/static/komudotto/";
        const tweetMessage = "コムドット様に" + Main.dodgeCount + "回%0a"
                            +"道をお譲りしました。%0a" 
        const tweetHashTag = "コムドット"
        const tweet = "https://twitter.com/share?url=" + tweetURL
                    + "&text=" + tweetMessage
                    + "&hashtags=" + tweetHashTag;
        tweetButton.href = tweet;
        tweetButton.rel = "nofollow"; //リンク先のSEO評価を渡さない
        tweetButton.target = "_blank"; //別ウィンドウで開く
        tweetButton.style.display = "block"; //widthなどを反映させる
        tweetButton.style.textAlign = "center"; //文字の水平中央揃え
        tweetButton.style.textDecoration = "none"; //下線を消す
        tweetButton.style.fontFamily = Config.FONT_FAMILY;
        tweetButton.style.color = "#fff";
        tweetButton.style.background = "#1d9bf0";
        tweetButton.style.borderRadius = "100vh";
        tweetButton.style.width = Config.BUTTON_W + "px";
        tweetButton.style.fontSize = Config.BUTTON_FONT_SIZE + "px";
        tweetButton.style.marginTop = Config.BUTTON_MARGIN + "px";
        tweetButton.style.border = "none";
        tweetButton.style.setProperty("filter", Config.BUTTON_SHADOW_SETTING);

        //スタートボタンが押されたとき
        retryButton.addEventListener("click",
        function(){
            //リロード
            location.reload();
        })

        //ツイートボタンが押されたとき
        /*
        tweetButton.addEventListener("click",
        function(){
            const tweet = "コムドット様に" + Main.dodgeCount + "回\n"
                +"道をお譲りしました。\n" 
                +"#コムドット\n"
                +"https://musemyuzu.com/static/komudotto/\n"
                +"";
                
            location.replace(tweet);
            //クリップボードにコピー
            navigator.clipboard.writeText(tweet)
                .then(function(){
                    alert("クリップボードにコピーしました。");
                }, function(){
                    alert("クリップボードにコピーできませんでした。");
                });
        })
        */

        const div = document.getElementById("buttonDiv");
        div.appendChild(retryButton);
        div.appendChild(tweetButton);
    }

    //終了画面を表示
    static finish(resultText){
        //BGMを消す
        AudioController.pauseBGM();

        this.hideImage();
        this.showResult(resultText);
        this.createButton();
    }
}