const express = require('express');
const app = express();


app.get('/', (req, res) => {
    let data = {
        name: 'afsal',
        job: "Dev"
    }
    res.send(data);
});

app.listen(8082, () => {
  console.log('Listening on port 8082');
});
