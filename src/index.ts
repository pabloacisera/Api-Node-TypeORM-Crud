import App from './app'
import BaseRoute from './routes/base.route';
import userRoutes from './routes/user.routes';

const app= new App([new BaseRoute(), new userRoutes()])

app.listen();