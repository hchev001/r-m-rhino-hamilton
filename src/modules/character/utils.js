import request from "../../utils/apis/request";

/**
 * Request from the Rick and Morty API the list of all characters, paginated
 * @param {Number} page_number
 * @returns
 */
export const FetchCharactersFromAPI = (page_number = 1) => {
  // if a page number greater than 1 is provided, fetch it else return the default
  const url =
    page_number > 1 ? `/character/?page=${page_number}` : "/character";
  return request({
    method: "get",
    url,
  });
};

/**
 * Used for fetching the next pages
 * @param {*} next_page
 * @returns
 */
export const FetchCharactersFromPage = (next_page) => {
  // use the provided url to fetch the next page of resources
  return request({ method: "get", url: next_page });
};

/**
 * Consumes API endpoint for retrieving a character by its id
 */
export const FetchCharacterById = (id) =>
  request({ method: "get", url: `/character/${id}` });
