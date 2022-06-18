class Collider{
    static textElement;
    static peopleElement;
    static textW;
    static textH;

    static initialize(){
        this.textElement = document.getElementById("text");
        //二つ目のpeople（右側）を取得
        this.peopleElement = document.getElementById("peopleDiv").lastChild;

        //キャンバスに文字を書いて、幅などを取得
        const ctx = document.createElement("canvas").getContext("2d");
        ctx.font = Config.FONT_SIZE + "px "+ Config.FONT_FAMILY;
        const measure = ctx.measureText("コムドット");
        //幅を取得
        this.textW = measure.width;
        //高さを取得（基準点から上枠までと下枠までの距離の合計）
        this.textH = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;
    }

    //テキストと人がぶつかったかどうか。
    //ぶつかったらtrueを返す
    static checkCollision(){
        //テキストのコライダーの原点のx座標（テキストの中心）
        const textColliderOrgX = parseInt(this.textElement.style.left);
        //テキストのコライダーの原点のy座標（テキストの上）
        const textColliderOrgY = parseInt(this.textElement.style.top) - this.textH * Config.TEXT_COLLIDER_H_RATIO/2;
        //テキストのコライダーの幅（右半分）
        const textColliderW = this.textW * Config.TEXT_COLLIDER_W_RATIO /2;
        //テキストのコライダーの高さ
        const textColliderH = this.textH * Config.TEXT_COLLIDER_H_RATIO;
        //人のコライダーの原点のx座標
        const peopleColliderOrgX = parseInt(this.peopleElement.style.left);
        //人のコライダーの原点のy座標
        const peopleColliderOrgY = parseInt(this.peopleElement.style.top);
        //人のコライダーの幅
        const peopleColliderW = this.peopleElement.naturalWidth * Config.PEOPLE_COLLIDER_W_RATIO;
        //人のコライダーの高さ
        const peopleColliderH = this.peopleElement.naturalHeight * Config.PEOPLE_COLLIDER_H_RATIO;

        //矩形AとBの衝突判定（Aがテキスト、Bが人）
        //Aの左辺のx < Bの右辺のx
        if(textColliderOrgX < peopleColliderOrgX + peopleColliderW){
            //Aの右辺のx > Bの左辺のx
            if(textColliderOrgX + textColliderW > peopleColliderOrgX){
                //Aの上辺のy < Bの下辺のy
                if(textColliderOrgY < peopleColliderOrgY + peopleColliderH){
                    //Aの下辺のy > Bの上辺のy
                    if(textColliderOrgY + textColliderH > peopleColliderOrgY){
                        //ぶつかった
                        return true;
                    }
                }
            }
        }

        return false;
    }
}