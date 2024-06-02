const express = require('express');
const axios = require('axios');
const cors = require("cors");
const app = express();
const port = 3000;
const { API_TOKEN } = require('./config');


app.use(cors({ origin: "*" }));

const endpoint = "https://api.iqualify.com/v2/offerings/";


app.get("/offerings", getOfferings);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function getOfferings(req, res) {
  try {
    const offeringsToShow = req.query.offeringsToShow;
    const orderBy = req.query.orderBy === '1' ? 'name' : 'start'; 

    const response = await axios.get(
      `${endpoint}${offeringsToShow}?&$orderby=${orderBy}%20asc`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    const { status, data } = error.response;
    res.status(status).json({ error: data });
  }
}

