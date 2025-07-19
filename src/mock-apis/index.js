import apiEndpoints from "../shared/constants/api-endpoints";
import requests from "../shared/utils/request";

const mockAPi = [
  apiEndpoints.agify.predictAge,
  apiEndpoints.albums.getAll,
  apiEndpoints.boredAPI.getActivity,
  apiEndpoints.catFacts.getFact,
  apiEndpoints.coinDesk.getBitcoinPrice,
  apiEndpoints.comments.getAll,
  apiEndpoints.dogAPI.getRandomImage,
  apiEndpoints.genderize.predictGender,
  apiEndpoints.nationalize.predictNationality,
  apiEndpoints.photos.getAll,
  apiEndpoints.posts.getAll,
  apiEndpoints.randomUser.getRandomUser,
  apiEndpoints.todos.getAll
];

export async function requestMockAPis() {
  return await requests(...mockAPi);
}
