const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5000;
app.use(express.static("public"));

app.get('/test', (req, res) => {
  res.json({success});
})

app.get('/api/:month', (req, res)=>{
  const month = req.params.month
  if(month === 'May-June') res.json({
    "guestData": [300, 100, 250, 150, 300, 100],
    "userData": [150, 80, 300, 100, 450, 300]
  })
  else if(month === 'April-May') res.json({
    "guestData": [200, 120, 280, 180, 400, 150],
    "userData": [120, 60, 260, 80, 420, 250]
  })
  else if(month === 'March-April') res.json({
    "guestData": [250, 80, 220, 130, 320, 90],
    "userData": [130, 70, 280, 90, 390, 220]
  })

})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
