import server from "./server";
import mongoDb from "./services/mongo";

server.listen(3000, () => {
  console.log("Server running on " + 3000);
  console.log(`http://localhost:${3000}`);
});

mongoDb();
