const makeFetchReq = async (url, ApiKey) => {
  const req = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": ApiKey,
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

// standings for comp
export const standingsSearch = async (url, ApiKey) => {
  let req = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": ApiKey,
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
export const teamSearch = async (query, ApiKey) => {
  return await makeFetchReq(
    `https://api.football-data.org/v2/teams/${query.id}`,
    ApiKey
  );
};

// player dets api.
export const playerSearch = async (query, ApiKey) => {
  return await makeFetchReq(
    `https://api.football-data.org/v2/players/${query.id}`,
    ApiKey
  );
};

// gets top 10 goal scorers code is league code e.g pl or sa

export const scorerSearch = async (query, ApiKey) => {
  return await makeFetchReq(
    `https://api.football-data.org/v2/competitions/${query.code}/scorers`,
    ApiKey
  );
};

// get all upcoming matches for team but needs team id !

export const fixtureSearch = async (query, ApiKey) => {
  return await makeFetchReq(
    `https://api.football-data.org/v2/teams/${query.id}/matches?status=SCHEDULED`,
    ApiKey
  );
};
