import request from "../../utils/apis/request";

export const FetchEpisodesFromAPI = (page_number = 1) => {
  // if a page number is provided and valid use it, else default to first page
  const url = page_number > 1 ? `/episode/?page=${page_number}` : "/episode";
  return request({
    method: "get",
    url: url,
  });
};
