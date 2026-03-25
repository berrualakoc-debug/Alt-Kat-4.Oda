var APP_DATA = {
  "scenes": [
    {
      "id": "0-gr",
      "name": "GİRİŞ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.013425609630726143,
        "pitch": 0.12594370739340377,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.602123171960514,
          "pitch": 0.6380420278324124,
          "rotation": 11.780972450961727,
          "target": "3-banyo"
        },
        {
          "yaw": 0.25311833410947315,
          "pitch": 0.4993863036184969,
          "rotation": 0,
          "target": "1-oturma-alani"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-oturma-alani",
      "name": "OTURMA ALANI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.25106264651549637,
        "pitch": 0.13344761179376974,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.11816336610852218,
          "pitch": 0.6673539894983076,
          "rotation": 18.06415775814132,
          "target": "2-yatak-odasi"
        },
        {
          "yaw": 2.5915312041001615,
          "pitch": 0.4596670342070368,
          "rotation": 0,
          "target": "0-gr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-yatak-odasi",
      "name": "YATAK ODASI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.008055365778435686,
        "pitch": 0.16729835758228262,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.0710103090501093,
          "pitch": 0.7661766536773573,
          "rotation": 3.141592653589793,
          "target": "1-oturma-alani"
        },
        {
          "yaw": -3.106550252091406,
          "pitch": 1.0211227468401507,
          "rotation": 0,
          "target": "1-oturma-alani"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banyo",
      "name": "BANYO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.0026851219261452286,
        "pitch": 0.23308984651913534,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6121677029188479,
          "pitch": 0.7314631769130884,
          "rotation": 10.995574287564278,
          "target": "0-gr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
