export const getPersons = `query ExampleQuery {
    allPeople {
      people {
        name
        id
        homeworld {
          name
        }
      }
    }
  }`