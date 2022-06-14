class Collider{
    static textElement;
    static peopleElement;

    static initialize(){
        this.textElement = document.getElementById("text");
        //二つ目のpeople（右側）を取得
        this.peopleElement = document.getElementById("peopleDiv").lastChild;
    }

    //テキストと人がぶつかったかどうか。
    //ぶつかったらtrueを返す
    static checkCollision(){
        const w_text = this.textElement.style.clientWidth;
        const h_text = this.textElement.style.clientHeight;
        //テキストの右端のx座標
        const x_text = this.textElement.style.left + w_text/2;
        //テキストの下端のy座標
        const y_text = this.textElement.style.top + h_text/2;
        //人の左端のx座標
        const x_people = this.peopleElement.style.left;
        //人の上端のy座標
        const y_people = this.peopleElement.style.top;

        if(x_people <= x_text){
            if(y_people <= y_text){
                return true;
            }
        }

        return false;
    }
}