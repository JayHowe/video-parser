var express = require('express');
var router = express.Router();
var getParser = require('../core/parser');

/* GET parser. */
router.get('/', async function(req, res, next) {
  const { video_url: videoUrl } = req.query;

  if (!videoUrl) {
    return res.status(400).send({ error: 'Missing video_url parameter' });
  }

  try {
    const parser = getParser(videoUrl); // 根据视频 URL 获取解析器
    const result = await parser(videoUrl); // 调用解析器
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
