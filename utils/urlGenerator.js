import CryptoJS from "crypto-js";

export function generateMarvelApiUrl(endpoint, params = {}) {
  const publicKey = "0145290a8358250c287dceca9697f2ba";
  const privateKey = "b31f4f578ad8402e1c4c6cd8176104fbfd68ba27";

  const ts = Date.now();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  const queryParams = new URLSearchParams({
    ts,
    apikey: publicKey,
    hash,
    ...params,
  });

  return `https://gateway.marvel.com/v1/public/${endpoint}?${queryParams}`;
}
