class TextController{
    static textList;
    static textElement;
    static diffList = [];
    static sumDiff;
    static lap;
    //テキストのy座標
    static y;
    //テキストのフォントサイズ
    static fontSize;
    //テキストがy方向に進む速さ
    static ySpeed;
    //似ていないひらがな
    static dissimilarTexts = ["ア", "イ", "ウ", "エ", "オ"];

    static initialize(){
        this.textList = ["ア", "イ", "ウ", "エ", "オ"];
        this.textElement = document.getElementById("text");
        this.textElement.style.position = "absolute";
        this.textElement.style.top = Config.START_Y;
        this.textElement.style.fontSize = "0px";

        this.diffList = [2, 1, 2, 2, 2];
        this.sumDiff = this.diffList.reduce((sum, element) => sum + element, 0);
        this.lap = 0;
        this.y = Config.START_Y;
        this.fontSize = 0;
        this.ySpeed = 2.0;
    }

    //0 - max-1 までの整数の乱数を発生
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //i番目の文字を一回変化
    static changeOnce(i){
        if(this.diffList[i] == 1){
            switch(i){
                case 0: this.textList[0] = "コ"; break;
                case 1: this.textList[1] = "ム"; break;
                case 2: this.textList[2] = "ド"; break;
                case 3: this.textList[3] = "ッ"; break;
                case 4: this.textList[4] = "ト"; break;
                default: break;
            }
        } else if(this.diffList[i] == 2){
            switch(i){
                case 0: this.textList[0] = "ゴ"; break;
                case 1: break; //diffList[1]は2にならない
                case 2: this.textList[2] = "ト"; break;
                case 3:
                    const r = this.getRandomInt(4);
                    let c;
                    switch(r){
                        case 0: c="ツ"; break;
                        case 1: c="ヅ"; break;
                        case 2: c="シ"; break;
                        case 3: c="ジ"; break;
                        default: break;
                    } 
                    this.textList[3] = c; 
                    break;
                case 4: this.textList[4] = "ド"; break;
                default: break;
            }
        }
        this.diffList[i]--;
        this.sumDiff--;
    }

    static changeTexts(){
        if(this.sumDiff == 0) return; //もう変える字がない

        //いくつ変化させるか（1～3）
        //ただし、sumDiffより大きいのはダメ
        let change;
        do{
            change = this.getRandomInt(3) + 1;
        } while(this.sumDiff < change)

        //change回だけ変化
        for(let i=0; i<change; i++){
            //何文字目を変えるか
            let r;
            do{
                r = this.getRandomInt(5);
            }while(this.diffList[r] == 0);

            this.changeOnce(r);
        }
        
    }

    // Update is called once per frame
    static update()
    {
        //全ての文字が変更できなくなったら終了
        if(this.sumDiff == 0) return true;

        //テキストが下端にあるか
        if(this.y > Config.FIELD_Y ) {
            //上に戻して周回数を1増やす
            this.y = Config.START_Y;
            this.fontSize = 0;
            this.lap++;

            if(Math.random() > Config.CHANGE_PROB){
                //コムドットが流れる
                this.textElement.textContent = "コムドット";
            }
            else{
                //文字を変える
                this.changeTexts();
                this.textElement.textContent = this.textList.reduce((sum, element) => sum + element, "");
            }
            
        }
        else{
            //下方向に動かす
            this.y += this.ySpeed;
            this.fontSize 
                += Config.FONT_SIZE * this.ySpeed/(Config.FIELD_Y - Config.START_Y);
        }

        this.textElement.style.top = this.y + "px";
        this.textElement.style.fontSize = this.fontSize + "px";

        return false;
    }
}