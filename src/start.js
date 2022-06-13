class Start{
    static initialize(){
        const startButton = document.createElement("button");
        startButton.type = "button";
        startButton.innerHTML = "スタート";

        const div = document.getElementById("buttonDiv");
        div.appendChild(startButton);
    }

    static btnStart(){

    }
}