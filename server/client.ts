import { Socket } from 'socket.io';

const events = {
  log: (data: any[]) => {
    console.log(data.map((s) => `${s}`).join(' '));
  },
};

export default class Client {
  socket: Socket;

  static registerEvents(sock: Socket): void {
    Object.entries(events).forEach(([event, callback]) => {
      sock.on(event, callback);
    });

    sock.on('123', console.log);
  }

  constructor(socket: Socket) {
    this.socket = socket;
    Client.registerEvents(socket);
  }
}
