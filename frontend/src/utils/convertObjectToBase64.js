export const convertObjectToBase64 = (value) => {
  const objetoJSON = JSON.stringify(value);
  const encoder = new TextEncoder();
  const objetoBytes = encoder.encode(objetoJSON);
  const base64String = btoa(String.fromCharCode.apply(null, objetoBytes));
  const encodedParam = encodeURIComponent(base64String); // Encoding for URL
  return encodedParam;
};
