const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Startseite",
      "bg": "https://nwp-cgn.de/img/poser/imgA09.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "code"
    }
  },
  {
    "id": 1,
    "slug": "app",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Application",
      "bg": "https://nwp-cgn.de/img/poser/imgA08.png"
    },
    "link": {
      "path": "/",
      "name": "Start App",
      "icon": "tube"
    }
  },
  {
    "id": 2,
    "slug": "user",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "User-Profil",
      "bg": "https://nwp-cgn.de/img/poser/imgA03.png"
    },
    "link": {
      "path": "/user",
      "name": "User",
      "icon": "user"
    }
  },
  {
    "id": 3,
    "slug": "settings",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Settings",
      "bg": "https://nwp-cgn.de/img/poser/imgA04.png"
    },
    "link": {
      "path": "/settings",
      "name": "Settings",
      "icon": "settings"
    }
  }
];

let navData = appData.map((x) => x.link);
let pageData = appData.map((x) => x.head);

console.log(navData)