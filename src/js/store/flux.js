const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      saved: [],
      favorites: [],
      characters: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
      next_page: "",
    },
    actions: {
      insertCharacters: (data) => {
        getStore().characters.some(
          (character) => character.uid === data.results[0].uid
        )
          ? null
          : setStore({
              characters: getStore().characters.concat(data.results),
              next_page: data.next,
            });
      },
      insertPlanets: (data) => {
        getStore().planets.some((planet) => planet.uid === data.results[0].uid)
          ? null
          : setStore({
              planets: getStore().planets.concat(data.results),
              next_page: data.next,
            });
      },
      insertSpecies: (data) => {
        getStore().species.some((specie) => specie.uid === data.results[0].uid)
          ? null
          : setStore({
              species: getStore().species.concat(data.results),
              next_page: data.next,
            });
      },
      insertStarships: (data) => {
        getStore().starships.some(
          (starship) => starship.uid === data.results[0].uid
        )
          ? null
          : setStore({
              starships: getStore().starships.concat(data.results),
              next_page: data.next,
            });
      },
      insertVehicles: (data) => {
        getStore().vehicles.some(
          (vehicle) => vehicle.uid === data.results[0].uid
        )
          ? null
          : setStore({
              vehicles: getStore().vehicles.concat(data.results),
              next_page: data.next,
            });
      },
      insertFavorites: (data) => {
        setStore({ favorites: getStore().favorites.concat(data) });
      },
      deleteFavorites: (title) => {
        setStore({
          favorites: getStore().favorites.filter((fav) => fav.title !== title),
        });
      },
      insertSaved: (data) => {
        setStore({ saved: getStore().saved.concat(data) });
      },
      deleteSaved: (title) => {
        setStore({
          saved: getStore().saved.filter((item) => item.title !== title),
        });
      },
    },
  };
};

export default getState;
