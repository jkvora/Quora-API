var express = require("express");
var puppeteer = require("puppeteer");
var router = express.Router();

var qURL = "https://www.quora.com/";

//Get profile Details
router.get("/profile/:username", async function(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let outputJson = {};
  try {
    await page.goto(qURL + "profile/" + req.params.username);
    outputJson = await page.evaluate(() => {
      var profile = {};

      profile.work = document.querySelector(
        ".WorkCredentialListItem  .UserCredential"
      ).innerText;
      profile.workdesc = document.querySelector(
        ".WorkCredentialListItem  .detail_text"
      ).innerText;

      profile.school = document.querySelector(
        ".SchoolCredentialListItem  .UserCredential"
      ).innerText;

      profile.location = document.querySelector(
        ".LocationCredentialListItem  .UserCredential"
      ).innerText;
      return profile;
    });
  } catch (err) {
    outputJson = {
      error: "Something went wrong"
    };
  }
  await browser.close();
  res.send(outputJson);
});

//Get Stats Detials
router.get("/stats/:username", async function(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let outputJson = {};
  try {
    await page.goto(qURL + "profile/" + req.params.username);
    outputJson = await page.evaluate(() => {
      var stats = {};
      stats.answers = Number(
        document.querySelector(".AnswersNavItem  .list_count").innerText
      );
      stats.questions = Number(
        document.querySelector(".QuestionsNavItem  .list_count").innerText
      );

      stats.posts = Number(
        document.querySelector(".PostsNavItem  .list_count").innerText
      );
      stats.blogs = Number(
        document.querySelector(".BlogsNavItem  .list_count").innerText
      );
      stats.followers = Number(
        document.querySelector(".FollowersNavItem  .list_count").innerText
      );

      stats.following = Number(
        document.querySelector(".FollowingNavItem  .list_count").innerText
      );
      stats.topics = Number(
        document.querySelector(".TopicsNavItem  .list_count").innerText
      );
      stats.edits = Number(
        document.querySelector(".OperationsNavItem  .list_count").innerText
      );

      return stats;
    });
  } catch (err) {
    outputJson = {
      error: "Something went wrong"
    };
  }
  await browser.close();
  res.send(outputJson);
});

//Get Stats Detials
router.get("/answer/:question/:username", async function(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    qURL + req.params.question + "/answer/" + req.params.username,
    { waitUntil: "networkidle0" }
  );
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");

  await page.evaluate(() => {
    let body = document.querySelector("body");
    let answer = document.querySelector(".layout_1col_main_card");
    let authorCard = document.querySelector(".AboutAuthorSection");
    var moreQues = document.querySelector(".AnswerPageViewMoreLink");
    moreQues.style.display = "none";
    body.innerHTML = "";
    body.appendChild(answer);
    body.appendChild(authorCard);
  });

  res.setHeader(
    "Content-disposition",
    "attachment; filename=" +
      req.params.question +
      "  ( By - " +
      req.params.username +
      " ).pdf "
  );
  res.setHeader("Content-type", "application/pdf");
  res.charset = "UTF-8";

  await page.pdf().then(data => {
    res.write(data);
  });
  await browser.close();
  res.send();
});

module.exports = router;
