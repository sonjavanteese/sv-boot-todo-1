export const appData = [
  {
    "id": 0,
    "slug": "start",
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "code"
    },
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Startseite",
      "bg": "https://nwp-cgn.de/img/poser/imgA09.png"
    }
  },
  {
    "id": 1,
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
    "id": 2,
    "slug": "edit",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Edit Profil",
      "bg": "https://nwp-cgn.de/img/poser/imgA06.png"
    },
    "link": {
      "path": "/edit",
      "name": "Profil",
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
export const navData = appData.map((x) => x.link);
export const pageData = appData.map((x) => x.head);

export default appData;

