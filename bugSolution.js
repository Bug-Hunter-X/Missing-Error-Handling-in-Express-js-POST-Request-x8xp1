const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || Object.keys(user).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  //Further validation could be added here
  if(!user.name || !user.email){
    return res.status(400).json({ error: 'Name and Email are required fields.'});
  }
  console.log('Received user:', user); 
  res.status(201).send();
});

app.listen(3000, () => console.log('Server listening on port 3000'));