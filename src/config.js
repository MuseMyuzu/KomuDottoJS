
//設定
class Config{

}

//フィールド縦
Config.FIELD_Y = 600;
//フィールド横
Config.FIELD_X = 600;

//文字が出現するx座標
Config.START_X = Config.FIELD_X * 0.5;
//文字が出現するy座標
Config.START_Y = 0;
//文字のy方向の初速度
Config.START_YSPEED = 5.0;
//一周するたびにどれくらい加速するか
Config.ADD_YSPEED = 0.7;

//フォントサイズ
Config.FONT_SIZE = 80;
//フォント
Config.FONT_FAMILY = "Otomanopee One";
//テキストの色
Config.TEXT_COLOR = "#fff"
//テキストの影
Config.TEXT_SHADOW_SETTING = "10px 10px 35px #22222288"
//縁取り
Config.STROKE_SETTING = "5px #000";

//結果のフォントサイズ
Config.RESULT_FONT_SIZE = 56;
//結果のテキストの色
Config.RESULT_TEXT_COLOR = "#fff";
//結果のテキストの影
Config.RESULT_TEXT_SHADOW_SETTING = "5px 5px 15px #22222299";
//結果のテキストの縁取り
Config.RESULT_TEXT_STROKE_SETTING = "3px #000"

//人の画像の幅
Config.PEOPLE_WIDTH = 150;
//人の画像の影
Config.PEOPLE_SHADOW_SETTING = "drop-shadow(10px 10px 15px #22222299)";
//右側の人のleftの初期値
Config.LEFT_MIN = Config.FIELD_X*0.5;
//右側の人のtop
Config.PEOPLE2_TOP = Config.FIELD_Y*0.5;
//右側の人のleftの上限
Config.LEFT_MAX = Config.FIELD_X*0.8;

//ボタンの影
Config.BUTTON_SHADOW_SETTING = "drop-shadow(10px 10px 10px #222222cc)";

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
