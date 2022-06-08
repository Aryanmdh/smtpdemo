const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser;

const server = new SMTPServer({
  secure: false,
  name: "mail.programmaticnft.com",
  onData(stream, session, callback) {
    parser(stream, {}, (err, parsed) => {
      if (err) console.log("ERR", err);

      console.log(parsed);
      stream.on("end", callback);
    });
  },
  disabledCommands: ["AUTH"],
  onConnect(session, callback) {
    console.log(session);
    return callback(); // Accept the connection
  }
});

server.listen(25, "172.31.16.192");