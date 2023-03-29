const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());

app.post('/booktable', (req, res) => {
  const { date, time, guest, name, phone } = req.body;
  console.log(`Received a booking request for ${guest} guests on ${date} at ${time} from ${name} (${phone})`);

  res.json({ message: 'Booked Successfully!' });
});

app.get('/bio', (req, res) => {
  res.sendFile(path.join(__dirname, 'bio.html'));
});

app.listen(3000, () => console.log('Server started on port 3000'));
