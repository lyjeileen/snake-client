const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LYJ");
    setTimeout(() => conn.write("Move: up"), 500);
    setTimeout(() => conn.write("Move: left"), 1000);
    setTimeout(() => conn.write("Move: down"), 1500);
    setTimeout(() => conn.write("Move: right"), 2000);
  });
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
