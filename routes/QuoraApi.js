var express=require('express');
var router=express.Router();
var temp=require('jk-demopkg');


//Check Out temporary modules created
temp.printMsg();
temp.CheckMsg();

//Get Node Modules
var cheerio=require("cheerio");
var request=require("request");


var qURL="https://www.quora.com/profile/";


//Get profile Details
router.get('/profile/:username', function(req, res){
  URL=qURL+req.params.username;
  GetProfileDetails(req.params.username,function(profile) {
     console.log(profile);
     res.json(profile);
  });
});


//Get Stats Detials
router.get('/stats/:username', function(req, res){
  URL=qURL+req.params.username;
  GetUserStats(req.params.username,function(stats){
     console.log(stats);
     res.json(stats);
  });
});




GetProfileDetails=function(username,callback) {
  //Create JSON
  var profile={ name:"",  url:"" , pic:"" ,  status:""};

  //Get Profile URL
  profile.url=URL;

  request(URL,function(error,response,html){
    if(!error){
      var $=cheerio.load(html);

      //GET Profile Name
      var data=$('.user');
      if(IsData(data[0]))
        profile.name=data[0].children[0].data.trim();

      //Get ProfilePhotoLink
      var data=$('.ProfilePhoto');
      if(IsData(data[0]))
        profile.pic=data[0].children[0].attribs["data-src"];

      //Get Profile Status
      var data=$('.rendered_qtext','.ProfileNameAndSig');
      if(IsData(data[0]))
        profile.status=data[0].children[0].data.trim();
  }
  callback(profile);
});


}



//Get User Statistics
GetUserStats=function(username,callback) {
  //Create JSON
  var stats={
    answers:0,  questions:0 , posts:0,
    followers:0 ,  following:0,    edits:0,
    views:
    {
      last30days:0,
      alltime:0
    }
  };

  request(URL,function(error,response,html){
    if(!error){
      var $=cheerio.load(html);
      //Get Profile Stats
      var data=$('.list_count');
      if(IsData(data[0]))
        stats.answers=parseInt(data[0].children[0].data);
      if(IsData(data[1]))
        stats.questions=parseInt(data[1].children[0].data);
      if(IsData(data[2]))
          stats.posts=parseInt(data[2].children[0].data);
      if(IsData(data[3]))
          stats.followers=parseInt(data[3].children[0].data);
      if(IsData(data[4]))
          stats.following=parseInt(data[4].children[0].data);
      if(IsData(data[5]))
          stats.edits=parseInt(data[5].children[0].data);

      //Get  Stats
      var data=$('.total_count');
      if(IsData(data[0]))
          stats.views.last30days=parseInt(data[0].children[0].data);
      if(IsData(data[1]))
          stats.views.alltime=parseInt(data[1].children[0].data);
    }
    callback(stats);
});

}


//Returns true if data is not null and data.children has value
IsData=function(data){
if(!data)
  return false;
if(!data.children[0])
  return false;

return true;
}


module.exports=router;
