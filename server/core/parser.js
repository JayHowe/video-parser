const url = require('url');

// 引入不同网站的解析器
const douyinParser = require('./parsers/douyin');
const toutiaoParser = require('./parsers/douyin');
const iqiyiParser = require('./parsers/iqiyi');

// 根据域名选择解析器
module.exports = function getParser(videoUrl) {
  const hostname = url.parse(videoUrl).hostname;

  if (hostname.includes('douyin.com')) {
    return douyinParser;
  } else if (hostname.includes('toutiao.com')) {
    return toutiaoParser;
  } else if (hostname.includes('iqiyi.com')) {
    return iqiyiParser;
  } else {
    throw new Error('Unsupported video source');
  }
}