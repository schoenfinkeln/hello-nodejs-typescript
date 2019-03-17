import { IncomingMessage, Server, ServerResponse } from 'http';
import { parse } from 'url';
import { Greeter } from './greeter';

const server = new Server();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  const queryParams = parse(request.url!, true).query;
  let message = 'Hello anonymous!';
  if (queryParams.greet) {
    const greeter = new Greeter(queryParams.greet as string);
    message = greeter.greet();
  }
  response.statusCode = 200;
  response.setHeader('content-type', 'text/html');

  response.write(`
    <h1>${message}</h1>
  `);
  response.end();
});

server.listen(3030);
// tslint:disable-next-line:no-console
console.log('SERVER listens on port 3030');
