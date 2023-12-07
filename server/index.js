const express = require('express');
const { generateToken } = require('./zoomAuth.js');

const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());

// CrossOriginIsolation goes here

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

const frontendFiles = process.cwd() + '/static';

app.use(express.static(frontendFiles));

app.get('/*', (_, res) => {
  res.send(frontendFiles + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
