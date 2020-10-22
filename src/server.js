/* 
	These file:
		*  import express and execute it
		*  set the port
		*  put a middleware for the app is able to understand JSON
		*  Delegate router handling (according to the purpose). For that task use Middlewares
		*  import the responsible of handling each route
		*  export by default the app
*/
import express, { json } from 'express';

const app = express();

//Routes
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/tasks.routes';

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(json());

//Routes
app.use(IndexRoutes);
app.use('/task', TaskRoutes);

export default app;