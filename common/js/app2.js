$(function () {
    /* ------------------------------------- ハンバーガーメニュー ---------------------------------- */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
    });

    /* ------------------------------------- ドロップダウンメニュー ---------------------------------- */
    $('#humburger_menu dt').click(function () {
        $('#humburger_menu dd').slideToggle();
    });
    

    /* --------------------------------------- 上に戻るボタン -------------------------------------- */
    // 初期化(消す)
    let topBtn = $('#scrollTop');  //ここで取得したjQueryオブジェクトは以降のコードでも頻出のため、変数に格納して使用
    topBtn.hide();

    // ある程度スクロールされたら表示
    $(window).scroll(function () {         //イベントに処理を登録js_p210
        if ($(this).scrollTop() > 800) {
            topBtn.fadeIn();               //フェードインで表示
        } else {
            topBtn.fadeOut();              //フェードアウトで非表示
        }
    });

    // クリックでゆっくりスクロールして戻る
    topBtn.click(function (event) {        //イベント登録と引数でイベントに関する情報が詰まったイベントオブジェクトを取得
        event.preventDefault();            //イベント発生時、ブラウザが標準で実行する動作をキャンセル (今回はリンク)
        $('body,html').animate({           //animateメソッドはブラウザによってscrollTopの指定タグが変わるため、両方を指定
            scrollTop: 0
        }, 200);
    });

    // マウスの出入りで少し上下に動く
    topBtn.mouseover(function () {
        topBtn.animate({
            marginBottom: '30px'
        });
    });

    topBtn.mouseout(function () {
        topBtn.animate({
            marginBottom: '20px'
        });
    });

    /* ------------------------------------------ ヘッダー高さ変化 --------------------------------------- */

    //var headerH = $('#pageHead').outerHeight(true); //header高さの取得    
    //スクロール途中からヘッダーの高さを変化させるための関数
    function FixedAnime() {
        //ヘッダーの高さを取得
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('#pageHead').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
            $('#headerHide').fadeOut();
        } else {
            $('#pageHead').removeClass('HeightMin');//HeightMinというクラス名を除去
            $('#headerHide').fadeIn();

        }
    }

    // 画面スクロールで変化
    $(window).scroll(function () {
        FixedAnime();//関数を呼ぶ
    });

    /* --------------------------------------------- 紙芝居風 ---------------------------------------------- */

    /* 768px以下では紙芝居風を解除するため、position: sticky;に対応していないブラウザ対応用のJavaScriptを、768pxより大きい場合に読み込む。 */
    $(window).on('load resize', function() {
        var windowWidth = window.innerWidth;
        var elements = $('.fixed');
        if (windowWidth >= 768) {
        Stickyfill.add(elements);
        }else{
        Stickyfill.remove(elements);
        } 
        });

});