import express from 'express';
import planetRoutes from './routes/planets';

const app = express();

planetRoutes(app);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})