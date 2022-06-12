class TextController{
    static text;
    static textElement;
    static changedFlag = [];
    static lap;
    //現在のテキストのdiff
    static diff;
    //目標のdiff
    static goalDiff;
    //テキストのy座標
    static y;
    //テキストがy方向に進む速さ
    static ySpeed;
    //似ていないひらがな
    static dissimilarTexts = ["ア", "イ", "ウ", "エ", "オ"];

    static initialize(){
        this.text = "コムドット"
        this.textElement = document.getElementById("text");
        this.textElement.style.position = "absolute";
        this.textElement.style.top = 0;
        this.changedFlag = [false, false, false, false];
        this.lap = 0;
        this.diff = 0;
        this.goalDiff = Config.INIT_DIFF;
        this.y = 0;
        this.ySpeed = 1.0;
    }

    //0 - max-1 までの整数の乱数を発生
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    static changeSimilar(text){
        //全てtrueか確認
        let count = 0;
        for(let i=0; i<4; i++){
            if(this.changedFlag[i] == true) count++;
        }
        //すべてtrueならどの文字も変えない
        if(count == 4) return;

        let r;
        //何番目の文字を変えるか決める
        do{
            r = this.getRandomInt(4);
        } while(this.changedFlag[r] == true)

        //変化後の文字を決めておく
        let c = this.dissimilarTexts[this.getRandomInt(this.dissimilarTexts.length)];
        
        switch(r){
            case 0:
                //1文字目を変化
                this.changedFlag[0] = true;
                this.text = c + this.text.substr(1, 4);
                break;
            case 1:
                //3文字目を変化
                this.changedFlag[1] = true;
                this.text = this.text.substr(0, 2)+c+this.text.substr(3, 2);
                break;
            case 2:
                //4文字目を変化
                this.changedFlag[2] = true;
                this.text = this.text.substr(0, 3) + c + this.text.substr(4, 1);
                break;
            case 3:
                //5文字目を変化
                this.changedFlag[3] = true;
                this.text = this.text.substr(0, 4) + c;
                break;
            default: break;
        }
    }

    static changeDissimilar(text){
        //全てtrueか確認
        let count = 0;
        for(let i=0; i<4; i++){
            if(this.changedFlag[i] == true) count++;
        }
        //すべてtrueならどの文字も変えない
        if(count == 4) return;

        let r;
        //何番目の文字を変えるか決める
        do{
            r = this.getRandomInt(4);
        } while(this.changedFlag[r] == true)

        switch(r){
            case 0:
                //1文字目を変化
                this.changedFlag[0] = true;
                this.text = "ゴ"+this.text.substr(1, 4);
                break;
            case 1:
                //3文字目を変化
                this.changedFlag[1] = true;
                this.text = this.text.substr(0, 2)+"ト"+this.text.substr(3, 2);
                break;
            case 2:
                //4文字目を変化
                this.changedFlag[2] = true;
                const r = this.getRandomInt(4);
                let c;
                switch(r){
                    case 0: c="ツ"; break;
                    case 1: c="ヅ"; break;
                    case 2: c="シ"; break;
                    case 3: c="ジ"; break;
                }
                this.text = this.text.substr(0, 3) + c + this.text.substr(4, 1);
                break;
            case 3:
                //5文字目を変化
                this.changedFlag[3] = true;
                this.text = this.text.substr(0, 4) + "ド";
                break;
            default: break;
        }
    }

    static changeTexts(goalDiff){
        let currentDiff = 0;
        //変更前のテキストを退避
        const originText = this.text;
        //目標のdiffに向かって、とりあえず文字を変えてみる
        while(currentDiff <= goalDiff){
            const r = this.getRandomInt(2);
            switch (r)
            {
                case 0: 
                    this.changeSimilar(this.text);
                    currentDiff += 1;
                    break;
                case 1: 
                    this.changeDissimilar(this.text);
                    currentDiff += 5;
                    break;
                default: break;
            }
        }
        if(currentDiff == goalDiff){
            //合格
            this.textElement.textContent = this.text;
        }
        else{
            //不合格。やり直し
            this.text = originText;
            this.changeTexts(this.goalDiff);
        }
    }

    // Update is called once per frame
    static update()
    {
        //テキストが下端にあるか
        if(this.y > Config.FIELD_Y) {
            //上に戻して周回数を1増やす
            this.y = 0;
            this.lap++;

            //周回するごとに目標のdiffが減っていく
            this.goalDiff -= this.lap * 2;

            //文字を変える
            this.changeTexts(this.goalDiff);
        }
        else{
            //下方向に動かす
            this.y += this.ySpeed;
        }

        this.textElement.style.top = this.y + "px";
    }
}