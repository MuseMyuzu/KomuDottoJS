class Collider{
    static textElement;
    static peopleElement;
    static w_text;
    static h_text;

    static initialize(){
        this.textElement = document.getElementById("text");
        //二つ目のpeople（右側）を取得
        this.peopleElement = document.getElementById("peopleDiv").lastChild;

        //キャンバスに文字を書いて、幅などを取得
        const ctx = document.createElement("canvas").getContext("2d");
        ctx.font = Config.FONT_SIZE + "px "+ Config.FONT_FAMILY;
        const measure = ctx.measureText("コムドット");
        //幅を取得
        this.w_text = measure.width;
        //高さを取得（基準点から上枠までと下枠までの距離の合計）
        this.h_text = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;
    }

    //テキストと人がぶつかったかどうか。
    //ぶつかったらtrueを返す
    static checkCollision(){
        //テキストの右端のx座標
        const x_text = parseInt(this.textElement.style.left) + this.w_text/2;
        //テキストの下端のy座標
        const y_text = parseInt(this.textElement.style.top) + this.h_text/2;
        //人の左端のx座標
        const x_people = parseInt(this.peopleElement.style.left);
        //人の上端のy座標
        const y_people = parseInt(this.peopleElement.style.top);

        if(x_people <= x_text){
            if(y_people <= y_text){
                return true;
            }
        }

        return false;
    }
}