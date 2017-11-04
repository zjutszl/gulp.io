var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');


var app = express();

app.get('/', function (req, res, next) {
  superagent.get('https://shimo.im/doc/qbqARevbzwgpTlmI?r=D74N10/「外链测试」')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }

      var $ = cheerio.load(sres.text);
      var arra = [];
      // var pattern = /.mp3$/;
      //   $("a").each(function(){
      //       if (this.href && pattern.test(this.href)){
      //           arra.push(this.href);
      //       }
      //   })
  
      res.send(arra);
      
      
    //   var items = [];
    //   $('#topic_list .topic_title').each(function (idx, element) {
    //     var $element = $(element);
    //     items.push({
    //       title: $element.attr('title'),
    //       href: $element.attr('href')
    //     });
    //   });

    });
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});
