# Quora-Scraper
A Simple Quora Scrapper to scrape data (Unofficial)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](LICENSE)
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [/profile/:username](#profileusername)
  - [/stats/:username](#statsusername)
- [Contribute](#contribute)
- [License](#license)


## Installation

### Source
```sh
$ git clone https://github.com/jkvora/Quora-Scraper.git
$ cd Quora-Scraper
$ npm install
```

## Usage

```sh
$ npm run start
```

## Endpoints

### /profile/:username

> Gets user information about name and profile pic url

#### GET /profile/Jalak-Vora 

```
{
"name":"", "url":"https://www.quora.com/profile/Jalak=Vora",
"pic":"",
"status":""
}
```

### /stats/:username

> Gets  statistics of user.

#### GET /stats/Jalak-Vora

```
 {
 "answers":0,
 "questions":0,
 "posts":0,
 "followers":0,
 "following":0,
 "edits":0,
 "views":
    {
     "last30days":0,
     "alltime":0
     }
   }

```
## Contribute

Found an issue? Post it in the [issue tracker](https://github.com/jkvora/Quora-Scraper/issues). <br> 
Want to add another awesome feature? [Fork](https://github.com/jkvora/Quora-Scraper/fork) this repository and add your feature, then send a pull request.

## License
The MIT License (MIT)
Copyright (c) 2018 Jalak Vora



