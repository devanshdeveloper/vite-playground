import axiosInstance from "./axios";
import logger from "./logger";

export default async function requests(...configs) {
  return await Promise.all(configs.map((config) => request(config)));
}

export async function request(config) {
  let response = null;
  try {
    response = (await axiosInstance.request(config)).data;
  } catch (error) {
    logger.error(error);
    response = error;
  }

  return response;
}
