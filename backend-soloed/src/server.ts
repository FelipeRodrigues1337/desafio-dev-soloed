import express from 'express';
import routes from './routes/index';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("🔥 Back-end started on port 3333! 🔥 ")
});