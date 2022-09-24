const fetchUtility = (url) => {

  return fetch(url).then((response) => response.json())
}




const get = (url) => fetchUtility(url, "GET");

export { get, };