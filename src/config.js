
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
Config.START_YSPEED = 3.0;
//一周するたびにどれくらい加速するか
Config.ADD_YSPEED = 1.0;

//フォントサイズ
Config.FONT_SIZE = 80;
//フォント
Config.FONT_FAMILY = "Otomanopee One";
//縁取りの太さ
Config.STROKE_PX = 5;
//縁取りの色
Config.STROKE_COLOR = "#000000";

//人の画像の幅
Config.PEOPLE_WIDTH = 150;
//右側の人のleftの初期値
Config.LEFT_MIN = Config.FIELD_X*0.5;
//右側の人のtop
Config.PEOPLE2_TOP = Config.FIELD_Y*0.5;
//右側の人のleftの上限
Config.LEFT_MAX = Config.FIELD_X*0.8;

//文字がコムドット以外になる確率
Config.CHANGE_PROB = 0.5;
//文字の異なり具合の初期値
Config.INIT_DIFF = 25;

//テキストは何周するか
Config.LAP_MAX = 15;

//衝突中の時間（フレーム）
Config.COLLIDING_TIME_MAX = 60;

//テキストのコライダーの幅の割合
Config.TEXT_COLLIDER_W_RATIO = 0.7;
//テキストのコライダーの高さの割合
Config.TEXT_COLLIDER_H_RATIO = 0.7;
//人のコライダーの幅の割合
Config.PEOPLE_COLLIDER_W_RATIO = 1.0;
//人のコライダーの高さの割合
Config.PEOPLE_COLLIDER_H_RATIO = 0.5;