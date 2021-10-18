import { Socket } from 'socket.io';

// eslint-disable-next-line no-unused-vars
const events: { [id: string]: (...data: any[]) => void } = {
  log: (...data) => {
    console.log(data.map((s) => `${s}`).join(' '));
  },
};

export default class Client {
  socket: Socket;

  static registerEvents(sock: Socket): void {
    Object.entries(events).forEach(([event, callback]) => {
      sock.on(event, callback);
    });
  }

  constructor(socket: Socket) {
    this.socket = socket;
    Client.registerEvents(socket);
  }
}
