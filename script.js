$('#google-form').submit(function (e) {
  //在這裡我們要先擋掉form默認事件
  e.preventDefault();

  if ($('#name').val() && $('#email').val()) {//需要先確認必填欄位是否填寫
    $.ajax({
      // url為Google Form按下submit的aciotn
      url: "https://docs.google.com/forms/d/1exWes077I7MQegS2TFGcdTW5P_xKVFRaUMqRtpoX84o/formResponse",
      crossDomain: true,//解決跨網域CORS的問題
      data: {// entry.xxxxx 這些需要填寫您表單裡面的值，與其相互對應
        "entry.1296058552": $('#name').val(),
        "entry.747502929": $('#message').val(),
        "entry.135780277": $('#email').val()
      },
      type: "POST", //因為是要進行insert的動作，故事用POST
      dataType: "JSONP",
      complete: function () {
        //完成後把這些欄位清空
        $('#name').val('')
        $('#email').val('')
        $('#message').val('')
      }
    });
  }
});


function sendMessage() {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1168197062475649044/KmrZKgB6IjkyhzIZb5C_vPsg6K4ypUgBlmHtQdG2OWsnxhRbK50naWHp6L1cL7u-jKmU");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "IG小幫手",
    avatar_url: "https://imgur.com/NIctEfG.png",
    content: "新訊息"
  }
  request.send(JSON.stringify(params));
}
