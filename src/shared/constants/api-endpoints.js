const apiEndponts = {
  posts: {
    getAll: { method: "get", url: "/posts" },
    getById: { method: "get", url: "/posts/:id" },
    getComments: { method: "get", url: "/posts/:id/comments" },
    create: { method: "post", url: "/posts" },
    update: { method: "put", url: "/posts/:id" },
    partialUpdate: { method: "patch", url: "/posts/:id" },
    delete: { method: "delete", url: "/posts/:id" },
  },
  comments: {
    getAll: { method: "get", url: "/comments" },
    getByPostId: { method: "get", url: "/comments?postId=:postId" },
  },
  albums: {
    getAll: { method: "get", url: "/albums" },
    getById: { method: "get", url: "/albums/:id" },
  },
  photos: {
    getAll: { method: "get", url: "/photos" },
    getById: { method: "get", url: "/photos/:id" },
  },
  todos: {
    getAll: { method: "get", url: "/todos" },
    getById: { method: "get", url: "/todos/:id" },
  },
  users: {
    getAll: { method: "get", url: "/users" },
    getById: { method: "get", url: "/users/:id" },
  },
  catFacts: {
    getFact: { method: "get", url: "https://catfact.ninja/fact" },
  },
  dogAPI: {
    getRandomImage: {
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random",
    },
  },
  boredAPI: {
    getActivity: {
      method: "get",
      url: "https://www.boredapi.com/api/activity",
    },
  },
  coinDesk: {
    getBitcoinPrice: {
      method: "get",
      url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    },
  },
  agify: {
    predictAge: { method: "get", url: "https://api.agify.io?name=:name" },
  },
  genderize: {
    predictGender: {
      method: "get",
      url: "https://api.genderize.io?name=:name",
    },
  },
  nationalize: {
    predictNationality: {
      method: "get",
      url: "https://api.nationalize.io?name=:name",
    },
  },
  randomUser: {
    getRandomUser: { method: "get", url: "https://randomuser.me/api/" },
  },
  universities: {
    getByCountry: {
      method: "get",
      url: "http://universities.hipolabs.com/search?country=:country",
    },
  },
};

export default apiEndponts;
