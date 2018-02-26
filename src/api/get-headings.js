const apiUrl = "https://toc-backend-lrdccexgec.now.sh/";
function getHeadings(url) {
  const urlPath = url.replace(/^(http|https):\/\//, "");

  return fetch(apiUrl + "?url=" + encodeURI(urlPath)).then(resp => resp.json());
}

export default getHeadings;
