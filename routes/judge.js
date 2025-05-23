const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

// Gunakan API public dari Judge0
const JUDGE0_BASE = process.env.JUDGE_API_BASE;

const headers = {
  "Content-Type": "application/json",
  "X-RapidAPI-Key": process.env.JUDGE_API_KEY, // Daftar gratis di RapidAPI
  "X-RapidAPI-Host": process.env.JUDGE_API_HOST
};

router.post("/", async (req, res) => {
  const { source_code, language_id, stdin } = req.body;

  try {
    // Kirim kode untuk dikompilasi & dijalankan
    const submission = await axios.post(`${JUDGE0_BASE}/submissions`, {
      source_code,
      language_id,
      stdin
    }, { headers });

    const token = submission.data.token;

    // Tunggu hasil (polling)
    const getResult = async () => {
      const result = await axios.get(`${JUDGE0_BASE}/submissions/${token}`, { headers });
      if (result.data.status.id <= 2) {
        return new Promise(resolve => setTimeout(() => resolve(getResult()), 1000));
      } else {
        return result.data;
      }
    };

    const finalResult = await getResult();
    res.json(finalResult);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Gagal memproses kode" });
  }
});

module.exports = router;
