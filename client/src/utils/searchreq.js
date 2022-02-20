const TOKEN = process.env.API_KEY;


const makeFetchReq = async (url) => {
  const req = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "33de8838b4474a529251e6f6b6944791",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })

    .catch((error) => console.error(error));
  return req;
}


// standings for comp
export const standingsSearch = async (url) => {
  let req = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "33de8838b4474a529251e6f6b6944791",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })

    .catch((error) => console.error(error));
  return req;
};

// team data
export const teamSearch = async query => {
  return await makeFetchReq(`https://api.football-data.org/v2/teams/${query.id}`)

};

// player dets api.
export const playerSearch = async query => {
  return await makeFetchReq(`https://api.football-data.org/v2/players/${query.id}`)
};

// gets top 10 goal scorers code is league code e.g pl or sa

export const scorerSearch = async query => {
  return await makeFetchReq(`https://api.football-data.org/v2/competitions/${query.code}/scorers`)
};

// get all upcoming matches for team but needs team id !

export const fixtureSearch = async query => {
  return await makeFetchReq(`https://api.football-data.org/v2/teams/${query.id}/matches?status=SCHEDULED`)
};