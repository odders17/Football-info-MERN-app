const Token = process.env.REACT_APP_API_KEY;

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
export const teamSearch = async (query) => {
  const teamData = await fetch(
    // api key needed
    `https://api.football-data.org/v2/teams/${query.id}`
  );

  const resp = await teamData.json();
  return resp;
};

// player dets api.
export const playerSearch = async (query) => {
  const playerData = await fetch(
    // api key needed needs id
    `https://api.football-data.org/v2/players/${query.id}`
  );

  const resp = await playerData.json();
  return resp;
};

// gets top 10 goal scorers code is league code e.g pl or sa
export const scorerSearch = async (query) => {
  const scorerData = await fetch(
    // api key needed
    `https://api.football-data.org/v2/competitions/${query.code}/scorers`
  );

  const resp = await scorerData.json();
  return resp;
};

// get all upcoming matches for team but needs team id !
export const fixtureSearch = async (query) => {
  const fixtureData = await fetch(
    // api key needed
    `https://api.football-data.org/v2/teams/${query.id}/matches?status=SCHEDULED`
  );

  const resp = await fixtureData.json();
  return resp;
};
