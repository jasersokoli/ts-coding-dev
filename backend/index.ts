import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
