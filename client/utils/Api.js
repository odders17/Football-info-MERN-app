export const standingsSearch = async (query) => {
  const standingsData = await fetch(
    // standings for comp
    // api key needed
    `https://api.football-data.org/v2/competitions/${query.id}/standings`
  );

  const resp = await standingsData.json();
  return resp;
};
