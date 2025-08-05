const express = require("express");
const contentstack = require("@contentstack/management");
const router = express.Router();
require('dotenv').config();

router.post("/create-entry", async (req, res) => {
  const form = req.body;
  const title = `${form.first_name} ${form.last_name}`.trim();

  const contentstackClient = contentstack.client({
    authtoken: process.env.CONTENTSTACK_AUTHTOKEN,
        //api_key: process.env.CONTENTSTACK_API_KEY,
        //management_token: process.env.CONTENTSTACK_MANAGEMENT_TOKEN ,
     });

  const stack = await contentstackClient.stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    // branch_uid: process.env.CONTENTSTACK_BRANCH,
  });

  const entry = {
    title,
    first_name: form.first_name,
    last_name: form.last_name,
    address: form.address,
    address_2: form.address_2,
    city: form.city,
    state: form.state,
    pincode: form.pincode,
  };

  try {
    const createdEntry = await stack
      .contentType("personal_details")
      .entry()
      .create({ entry });
    res.json({ uid: createdEntry.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;