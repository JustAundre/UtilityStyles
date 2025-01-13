const
cookie = 'VISITOR_INFO1_LIVE=M9rCLxzjYHM; VISITOR_PRIVACY_METADATA=CgJVUxIEGgAgCw%3D%3D;LOGIN_INFO=AFmmF2swRgIhALtBfZLdWrOG5MfF6qlaw3q8rMaYkmIQsuiNvlo3BBKAiEAhoPLZZ54b0OlH3FFS_GTvmJ88Yu5CM16bkPbWX62C4:QUQ3MjNmeDFDM3B0QUV1X2diZjBWTnFRZjkwM2hKWW5FWnAwWHRDdWZDMlVTYk9XQmlfS1RhTmZfZUxIcTdCaDYtZ2R3U0FsTlcwdzBxaU4xTGxkS0p4Nk91MWxvTkhLWTZoV3F3UEl4WTIyN0hBOU1wVGc3bk5iaVExaGVJektaWFVfa0ZPU28yX2o1bWxjeW5vVVFVaXlnWGNGWU81dzR3; HSID=AAEVikew4OYs-ZHBh; SSID=AgwaF7tU_NfOkSZRi; APISID4n3RmafHqPRYT8zU/AFivLqTPhWiuDKO9I; SAPISID=7S1eTQ8GR-o3ES_P/Akb1GbL2nHXXOfhgv; __Secure-1PAPISID=7S1eTQ8GR-o3ES_P/Akb1GbL2nHXXOfhgv; __Secure-3PAPISID=7S1eTQ8GR-o3ES_P/Akb1GbL2nHXXOfhgv; SID=g.a000rAil5La4APFBWg5MP9sxngvnkb3lFrtSMG1oWEuLZledJ117SymAJ_-RQTfJIs9Pr1FSBwACgYKAdMSARMSFQHGX2MiaKHVe-oa8LGqVyziEt9S-xoVAUF8yKrDBCFDD9uO42xu1LxmZcVW0076; __Secure-1PSID=g.a000rAil5La4APFBWg5MP9sxngvnkb3lFrtSMG1oWEuLZledJ117nL1Si9FObthFFg7QcafZ5wACgYKAcsSARMSFQHGX2MiwOl6sQeINJSdMHfTPyLMlxoVAUF8yKrCt_bLu6piaVcJjEJQTo6a0076;__Secure-3PSID=g.a000rAil5La4APFBWg5MP9sxngvnkb3lFrtSMG1oWEuLZledJ117k4hfOl_aQ9kaPpsVynay9gACgYKAccSARMSFQHGX2Mig1gXM0l9ZbzFLvP7uvCIQxoVAUF8yKo8bD_wNJ4Vuq8VZ96wUu7K0076; YSC=fCJDFv4D3uc; __Secure-1PSIDTS=sidts-CjEB7wV3sSoWtIC_gRFX1qQoxV95Z3V30B_lp5aSB4KETz6cOg1txsmzP7Lphyy0BoQQEAA;__Secure-3PSIDTS=sidts-CjEB7wV3sSoWtIC_gRFX1qQoxV95Z3V30B_lp5aSB4KETz6cOg1txsmzP7Lphyy0BoQQEAA; PREF=tz=America.Chicago&f5=30000&f7=100&f6=40000000; SIDCC=AKEyXzV2nCEuqTyc1i-056JYDF_4zr4st4yPPjHY7qG6izjt_B1lo1VXKlD0bMcFulZ9TvegV8k;__Secure-1PSIDCC=AKEyXzWSmVZsjiUxzESjlFXGBwfIyrhrab1H8y4G7l1_EZ7NTmQjUw95UlDpX4hlZLHutwnrBw; __Secure-3PSIDCC=AKEyXzW-BcCYApPwJgh2QpLG_DJXoPPwhoBQrhR12b_GkBH0Xh-dLGd1s5bueJq7MlEPQaK6lA; ST-1x29qd6=session_logininfo=AFmmF2swRgIhALtBfZLdWrOG5MfF6qla-w3q8rMaYkmIQsuiNvlo3BBKAiEAhoPL-ZZ54b0OlH3FFS_GTvmJ88Yu5CM16bkPbWX62C4%3AQUQ3MjNmeDFDM3B0QUV1X2diZjBWTnFRZjkwM2hKWW5FWnAwWHRDdWZDMlVTYk9XQmlfS1RhTmZfZUxIcTdCaDYtZ2R3U0FsTlcwdzBxaU4xTGxkS0p4Nk91MWxvTkhLWTZoV3F3UEl4WTIyN0hBOU1wVGc3bk5iaVExaGVJektaWFVfa0ZPU28yX2o1bWxjeW5vVVFVaXlnWGNGWU81dzR3',
authorization = 'SAPISIDHASH 1734073008_2fb1ad45081557779fff557a4e580f682ff01d7d_u SAPISID1PHASH 1734073008_2fb1ad45081557779fff557a4e580f682ff01d7d_u SAPISID3PHASH 1734073008_2fb1ad45081557779fff557a4e580f682ff01d7d_u',
playlist = 'PLA3Qg2bL71ZfuJG0oURp9sLZRb56Og1N_',
video = '1ev6YeMqDdI'
data = {
  "context": {
    "client": {
      "clientName": "WEB",
      "clientVersion": "2.20241212.01.00",
    }
  },
  "actions":[{
    "addedVideoId": `${video}`,
    "action": "ACTION_ADD_VIDEO"
  }],
  "playlistId": `${playlist}`
};

async function sendPostRequest(data) {
  try {
    const response = await fetch('https://www.youtube.com/youtubei/v1/browse/edit_playlist', {
      method: 'POST',
      headers: {
        'Cookie': `${cookie}`,
        'Authorization': `${authorization}`,
        'origin': 'https://www.youtube.com',
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    console.log('Response: ', responseData);
  } catch (error) {}
}
sendPostRequest(data);