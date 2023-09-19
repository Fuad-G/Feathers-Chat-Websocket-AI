import { feathers } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import io from "socket.io-client";
import authentication from "@feathersjs/authentication-client";

const socket = io("http://localhost:3030", { transports: ["websocket"] });
const client = feathers();

client.configure(socketio(socket));
client.configure(authentication());

//client.service("messages").on("created", () => {console.log("Real time message")});

export default client;
