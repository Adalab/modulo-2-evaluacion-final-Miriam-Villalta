"use strict";

/*const data = [
  {
    score: 18.140709,
    show: {
      id: 139,
      url: "https://www.tvmaze.com/shows/139/girls",
      name: "Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance"],
      status: "Ended",
      runtime: 30,
      premiered: "2012-04-15",
      officialSite: "http://www.hbo.com/girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 6.6,
      },
      weight: 92,
      network: {
        id: 8,
        name: "HBO",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      },
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      updated: 1611310521,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/139",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686",
        },
      },
    },
  },
  {
    score: 15.345482,
    show: {
      id: 23542,
      url: "https://www.tvmaze.com/shows/23542/good-girls",
      name: "Good Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy", "Crime"],
      status: "Running",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2018-02-26",
      officialSite: "https://www.nbc.com/good-girls",
      schedule: {
        time: "22:00",
        days: ["Sunday"],
      },
      rating: {
        average: 7.4,
      },
      weight: 99,
      network: {
        id: 1,
        name: "NBC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 328577,
        imdb: "tt6474378",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/297/744253.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/297/744253.jpg",
      },
      summary:
        '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
      updated: 1621261226,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/23542",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2078180",
        },
        nextepisode: {
          href: "https://api.tvmaze.com/episodes/2078511",
        },
      },
    },
  },
  {
    score: 15.135954,
    show: {
      id: 49892,
      url: "https://www.tvmaze.com/shows/49892/the-powerpuff-girls",
      name: "The Powerpuff Girls",
      type: "Scripted",
      language: "English",
      genres: [],
      status: "In Development",
      runtime: null,
      averageRuntime: null,
      premiered: null,
      officialSite: null,
      schedule: {
        time: "",
        days: [],
      },
      rating: {
        average: null,
      },
      weight: 94,
      network: {
        id: 5,
        name: "The CW",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: "tt12976292",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/307/768002.jpg",
      },
      summary:
        "<p>The superhero children have grown and are now disillusioned twentysomethings who resent having lost their childhood to crime fighting. Will they agree to reunite now that the world needs them more than ever?</p>",
      updated: 1619036522,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/49892",
        },
      },
    },
  },
  {
    score: 15.0330305,
    show: {
      id: 722,
      url: "https://www.tvmaze.com/shows/722/the-golden-girls",
      name: "The Golden Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy"],
      status: "Ended",
      runtime: 30,
      premiered: "1985-09-14",
      officialSite: null,
      schedule: {
        time: "21:00",
        days: ["Saturday"],
      },
      rating: {
        average: 8.5,
      },
      weight: 90,
      network: {
        id: 1,
        name: "NBC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 5820,
        thetvdb: 71292,
        imdb: "tt0088526",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg",
      },
      summary:
        "<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>",
      updated: 1617572610,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/722",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/64040",
        },
      },
    },
  },
  {
    score: 14.914239,
    show: {
      id: 33320,
      url: "https://www.tvmaze.com/shows/33320/derry-girls",
      name: "Derry Girls",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Running",
      runtime: 30,
      premiered: "2018-01-04",
      officialSite: "http://www.channel4.com/programmes/derry-girls",
      schedule: {
        time: "22:00",
        days: ["Tuesday"],
      },
      rating: {
        average: 8,
      },
      weight: 93,
      network: {
        id: 45,
        name: "Channel 4",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 338903,
        imdb: "tt7120662",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/184/460240.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/184/460240.jpg",
      },
      summary:
        "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
      updated: 1608838190,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/33320",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1631064",
        },
      },
    },
  },
  {
    score: 14.90105,
    show: {
      id: 52731,
      url: "https://www.tvmaze.com/shows/52731/lbx-girls",
      name: "LBX Girls",
      type: "Animation",
      language: "Japanese",
      genres: ["Action", "Anime", "Science-Fiction"],
      status: "Running",
      runtime: 25,
      premiered: "2021-01-06",
      officialSite: null,
      schedule: {
        time: "07:00",
        days: ["Wednesday"],
      },
      rating: {
        average: null,
      },
      weight: 0,
      network: {
        id: 132,
        name: "Tokyo MX",
        country: {
          name: "Japan",
          code: "JP",
          timezone: "Asia/Tokyo",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 391883,
        imdb: "tt12415562",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/291/728664.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/291/728664.jpg",
      },
      summary:
        "<p>In an unplanned field trip, Riko is transported to an alternate Japan where metal-based life forms known as Mimesis ravage the world. Only girls equipped with LBX armored weaponry can stand up to this scourge. Joined by four other displaced young women, Riko will have to adapt to save humanity. The hope of a planet now rests on these heavy metal soldiers who desire one wish—to return home again!</p>",
      updated: 1614189155,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/52731",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2004426",
        },
      },
    },
  },
  {
    score: 14.772684,
    show: {
      id: 41481,
      url: "https://www.tvmaze.com/shows/41481/girls-hostel",
      name: "Girls Hostel",
      type: "Scripted",
      language: "Hindi",
      genres: ["Drama", "Comedy"],
      status: "Running",
      runtime: 20,
      averageRuntime: 22,
      premiered: "2018-12-08",
      officialSite: "https://tvfplay.com/category/6/series/445",
      schedule: {
        time: "",
        days: ["Friday", "Saturday"],
      },
      rating: {
        average: null,
      },
      weight: 60,
      network: null,
      webChannel: {
        id: 152,
        name: "TVFPlay",
        country: {
          name: "India",
          code: "IN",
          timezone: "Asia/Kolkata",
        },
      },
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 357697,
        imdb: "tt9401936",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/189/473242.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/189/473242.jpg",
      },
      summary:
        "<p>Imagine a night in with four girls. Now imagine doing that for four years. In a building full of girls that is a Girl's Hostel. Live the Dushmani, the Dosti, the Pyaar, the Bhasad.</p>",
      updated: 1621617219,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/41481",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2096308",
        },
      },
    },
  },
  {
    score: 14.751229,
    show: {
      id: 6771,
      url: "https://www.tvmaze.com/shows/6771/the-powerpuff-girls",
      name: "The Powerpuff Girls",
      type: "Animation",
      language: "English",
      genres: ["Comedy", "Action", "Science-Fiction"],
      status: "Running",
      runtime: 15,
      premiered: "2016-04-04",
      officialSite:
        "https://www.cartoonnetwork.com/video/powerpuff-girls/index.html",
      schedule: {
        time: "17:30",
        days: ["Sunday"],
      },
      rating: {
        average: 5.8,
      },
      weight: 51,
      network: {
        id: 11,
        name: "Cartoon Network",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 307473,
        imdb: "tt4718304",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg",
      },
      summary:
        "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>",
      updated: 1573685920,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/6771",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1662010",
        },
      },
    },
  },
  {
    score: 14.62476,
    show: {
      id: 525,
      url: "https://www.tvmaze.com/shows/525/gilmore-girls",
      name: "Gilmore Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy", "Romance"],
      status: "Ended",
      runtime: 60,
      premiered: "2000-10-05",
      officialSite: null,
      schedule: {
        time: "21:00",
        days: ["Tuesday"],
      },
      rating: {
        average: 8.4,
      },
      weight: 84,
      network: {
        id: 5,
        name: "The CW",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 3683,
        thetvdb: 76568,
        imdb: "tt0238784",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg",
      },
      summary:
        "<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>",
      updated: 1618158592,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/525",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/47639",
        },
      },
    },
  },
  {
    score: 14.580042,
    show: {
      id: 1073,
      url: "https://www.tvmaze.com/shows/1073/bomb-girls",
      name: "Bomb Girls",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Romance", "War"],
      status: "Ended",
      runtime: 60,
      premiered: "2012-01-04",
      officialSite: null,
      schedule: {
        time: "20:00",
        days: ["Monday"],
      },
      rating: {
        average: 8.8,
      },
      weight: 43,
      network: {
        id: 67,
        name: "Global",
        country: {
          name: "Canada",
          code: "CA",
          timezone: "America/Halifax",
        },
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30600,
        thetvdb: 254378,
        imdb: "tt1955311",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/7/17549.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/7/17549.jpg",
      },
      summary:
        "<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>",
      updated: 1592496010,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/1073",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/108024",
        },
      },
    },
  },
];
console.log(data);

//pintar primer elemento

/*const filmList = document.querySelector(".js-films");

let filmListContent = "";

for (let i = 0; i < data.length; i++) {
  filmListContent += `<li class="films-each">
      <div class="films-each__container">
        <img src="${dataSearch.image.medium[i]}" alt="" class="films-each__container--photo">
        <h3 class="films-each__container--text">${dataSearch.name[i]}</h3>
      </div>
    </li>`;
}

filmList.innerHTML = `
<li class="films-each">
      <div class="films-each__container">
        <img src="${dataSearch.image.medium}" alt="" class="films-each__container--photo">
        <h3 class="films-each__container--text">${dataSearch.name}</h3>
      </div>
</li>
`;*/
