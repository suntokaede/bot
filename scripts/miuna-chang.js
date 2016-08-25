module.exports = function(robot) {
  return robot.respond(/こんばんは$/i, function(msg) {
    const username = msg.message.user.name
    return msg.send(`こんばんは、${username}`);
  });
};