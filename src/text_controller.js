class TextController{
    static text;
    static textElement;
    static changedFlag = [];
    static lap;
    static diff;
    //テキストのy座標
    static y;

    static initialize(){
        this.text = "コムドット"
        this.textElement = document.getElementById("text");
        this.textElement.style.top = 0;
        this.changedFlag = [false, false, false, false];
        this.lap = 0;
        this.diff = 0;
        this.y = 0;
    }

    //0 - max-1 までの整数の乱数を発生
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    static changeSimilar(text){
        //全てfalseか確認

        //何番目の文字を変えるか決める
        do{
            const r = this.getRandomInt(4);
        } while(changedFlag[r] == true)

        switch(r){
            case 0:
                //1文字目を変化
            case 1:
                //3文字目を変化
                break;
            case 2:
                //4文字目を変化
                break;
            case 3:
                //5文字目を変化
                break;
            default: break;
        }
    }

    static changeDissimilar(text){

    }

    static changeTexts(goalDiff){
        let currentDiff = 0;
        const text = this.text;
        while(currentDiff <= goalDiff){
            this.getRandomInt(2);
            switch (r)
            {
                case 0: 
                    this.changeSimilar(text);
                    currentDiff += 1;
                    break;
                case 1: 
                    this.changeDissimilar(text);
                    currentDiff += 5;
                    break;
                default: break;
            }
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
            this.diff -= this.lap * 2;

            //文字を変える
            //this.changeTexts(this.diff);
        }
        else{
            //下方向に動かす
            this.y += Config.YSPEED;
        }

        this.textElement.style.top = this.y;
        console.log("y="+this.y);
    }
}