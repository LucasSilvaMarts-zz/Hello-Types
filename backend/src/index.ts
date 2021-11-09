import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send("Eae types");
});

app.listen(3000);
