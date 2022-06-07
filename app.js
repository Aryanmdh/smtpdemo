const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser

const server = new SMTPServer({
  onData(stream, session, callback) {
    parser(stream, {}, (err, parsed) => {
        if (err)
        console.log("ERR" , err)
      
      console.log(parsed)
      stream.on("end", callback)
    })
    
  },
  disabledCommands: ['AUTH']
});

server.listen(25,'0.0.0.0')