var express = require('express');
var puppeteer = require('puppeteer');
var router = express.Router();



var qURL = "https://www.quora.com/";


//Get profile Details
router.get('/profile/:username', async function (req, res) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(qURL + "profile/" + req.params.username);


  const data = await page.evaluate(() => {
    var profile = {};

    profile.work = document.querySelector(".WorkCredentialListItem  .UserCredential").innerText;
    profile.workdesc = document.querySelector(".WorkCredentialListItem  .detail_text").innerText;

    profile.school = document.querySelector(".SchoolCredentialListItem  .UserCredential").innerText;

    profile.location = document.querySelector(".LocationCredentialListItem  .UserCredential").innerText;
    return profile;
  });
  await browser.close();
  res.send(data);
});


//Get Stats Detials
router.get('/stats/:username', async function (req, res) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(qURL + "profile/" + req.params.username);


  const data = await page.evaluate(() => {
    var stats = {};
    stats.answers = document.querySelector(".AnswersNavItem  .list_count").innerText;
    stats.questions = document.querySelector(".QuestionsNavItem  .list_count").innerText;

    stats.posts = document.querySelector(".PostsNavItem  .list_count").innerText;
    stats.blogs = document.querySelector(".BlogsNavItem  .list_count").innerText;
    stats.followers = document.querySelector(".FollowersNavItem  .list_count").innerText;

    stats.following = document.querySelector(".FollowingNavItem  .list_count").innerText;
    stats.topics = document.querySelector(".TopicsNavItem  .list_count").innerText;
    stats.edits = document.querySelector(".OperationsNavItem  .list_count").innerText;

    return stats;
  });
  await browser.close();
  res.send(data);

});



//Get Stats Detials
router.get('/answer/:question/:username', async function (req, res) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(qURL + req.params.question + "/answer/" + req.params.username, { "waitUntil": "networkidle0" });
  await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');


   await page.evaluate(() => {
    let body = document.querySelector("body");
    let answer = document.querySelector(".layout_1col_main_card");
    let authorCard = document.querySelector(".AboutAuthorSection");
    var moreQues = document.querySelector(".AnswerPageViewMoreLink");
    moreQues.style.display="none";
    body.innerHTML = "";
    body.appendChild(answer);
    body.appendChild(authorCard);

  });

  await page.pdf({ path: req.params.question + "  ( By - " + req.params.username + " ) " })
  await browser.close();
  res.send("Success");

});







module.exports = router;
