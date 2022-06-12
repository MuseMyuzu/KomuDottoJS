//背景など、フィールドを描くクラス
class Field{

    static initialize(){
        
    }

    static draw(){
        var canvas = document.getElementById("canvas");
        
        if(canvas.getContext){
            var ctx = canvas.getContext("2d");
    
            ctx.fillStyle = "rgb(200, 200, 200)"
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        } else {
            console.log("no canvas context");
        }
    }
}