rand=new Array();
rand[0]='<a href=""><img src="img/banner_random1.gif" /></a>';
rand[1]='<a href=""><img src="img/banner_random2.gif" /></a>';
rand[2]='<a href=""><img src="img/banner_random3.gif" /></a>';
i=Math.floor(Math.random()*rand.length);
document.write(rand[i]); 


//-----------------------------------------
//
// rand[2]='ここに広告や画像のタグを貼り付け';
// rand[3]='ここに広告や画像のタグを貼り付け';
// rand[4]='ここに広告や画像のタグを貼り付け';
//  ：
// と増やしていくことで、ランダムに表示されるバナー数を
// 追加させる事が可能です。
//
// ※「ここに広告や画像のタグを貼り付け」にタグを貼り付ける際、
// 改行が入らないようにご注意ください。
// タグの中に改行が入ると正常に動作致しません。
//
//-----------------------------------------
