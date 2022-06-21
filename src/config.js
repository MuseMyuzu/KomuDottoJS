
//設定
class Config{

}

//フィールドの縦横
if(navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)){
    //スマホ使用
    Config.FIELD_X = 270;
    Config.FIELD_Y = 480;
}
else{
    //PC・タブレット使用
    Config.FIELD_X = 600;
    Config.FIELD_Y = 600;
}

//フィールド縦の最大
Config.FIELD_Y_MAX = 600;
//フィールド横の最大
Config.FIELD_X_MAX = 600;

//文字が出現するx座標
Config.START_X = Config.FIELD_X * 0.5;
//文字が出現するy座標
Config.START_Y = 0;
//文字のy方向の初速度(5.0)
Config.START_YSPEED = Config.FIELD_Y / 120;
//一周するたびにどれくらい加速するか(0.7)
Config.ADD_YSPEED = Config.START_YSPEED * 0.7 / 5;

//フォントサイズ(80)
Config.FONT_SIZE = Config.FIELD_X / 7.5;
//フォント
Config.FONT_FAMILY = "Otomanopee One";
//テキストの色
Config.TEXT_COLOR = "#fff"
//テキストの影
Config.TEXT_SHADOW_SETTING = "10px 10px 35px #22222288"
//縁取り
Config.STROKE_SETTING = "5px #000";

//結果のフォントサイズ(64)
Config.RESULT_FONT_SIZE = Config.FIELD_X / 10;
//結果のテキストの色
Config.RESULT_TEXT_COLOR = "#fff";
//結果のテキストの影
Config.RESULT_TEXT_SHADOW_SETTING = "5px 5px 15px #22222299";
//結果のテキストの縁取り
Config.RESULT_TEXT_STROKE_SETTING = "3px #000"

//人の画像の幅(150)
Config.PEOPLE_WIDTH = Config.FIELD_X / 4;
//人の画像の影
Config.PEOPLE_SHADOW_SETTING = "drop-shadow(10px 10px 15px #22222299)";
//右側の人のleftの初期値
Config.LEFT_MIN = Config.FIELD_X*0.5;
//右側の人のtop
Config.PEOPLE2_TOP = Config.FIELD_Y*0.5;
//右側の人のleftの上限
Config.LEFT_MAX = Config.FIELD_X*0.8;

//ボタンの幅
Config.BUTTON_W = Config.FIELD_X / 2;
//ボタンのフォント(50)
Config.BUTTON_FONT_SIZE = Config.FIELD_X / 12;
//ボタンの影
Config.BUTTON_SHADOW_SETTING = "drop-shadow(10px 10px 10px #222222cc)";
//二つのボタンの間の距離(20)
Config.BUTTON_MARGIN = Config.FIELD_Y / 30;

//文字がコムドット以外になる確率
Config.CHANGE_PROB = 0.5;
//文字の異なり具合の初期値
Config.INIT_DIFF = 25;

//テキストは何周するか
Config.LAP_MAX = 2;

//衝突中の時間（フレーム）
Config.COLLIDING_TIME_MAX = 45;

//テキストのコライダーの幅の割合
Config.TEXT_COLLIDER_W_RATIO = 0.7;
//テキストのコライダーの高さの割合
Config.TEXT_COLLIDER_H_RATIO = 0.7;
//人のコライダーの幅の割合
Config.PEOPLE_COLLIDER_W_RATIO = 1.0;
//人のコライダーの高さの割合
Config.PEOPLE_COLLIDER_H_RATIO = 0.5;
