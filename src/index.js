const express = require('express');
const dotenv = require('dotenv');
const { generateToken } = require('./zoomAuth.js');
dotenv.config();

const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());

app.post('/api/generate', async (req, res) => {
  let config = {
    sdkKey: process.env.ZOOM_SDK_KEY,
    sdkSecret: process.env.ZOOM_SDK_SECRET,
    topic: req.body.topic,
    roleType: req.body.roleType
  };
  let signature = await generateToken(config);
  res.status(200).json(signature);
});

app.use(
  express.static(`${process.cwd()}/src/public`, {
    setHeaders: (res) => {
      res.set('Cross-Origin-Opener-Policy', 'same-origin');
      res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
  })
);

app.use('/zoom', express.static(`${process.cwd()}/node_modules/@zoom/videosdk-ui-toolkit`));

app.get('/', (_, res) => {
  res.send(`${process.cwd()}/src/public/index.html`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
