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