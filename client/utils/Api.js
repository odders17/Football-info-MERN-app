// standings for comp
export const standingsSearch = async (query) => {
  const standingsData = await fetch(
    // api key needed
    `https://api.football-data.org/v2/competitions/${query.id}/standings`
  );

  const resp = await standingsData.json();
  return resp;
};

// team data
export const teamSearch = async (query) => {
  const teamData = await fetch(
    // api key needed
    `https://api.football-data.org/v2/teams/328${query.id}`
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
