export const convertBase64ToObject = (base64String) => {
  const decodedString = decodeURIComponent(base64String); // Decoding for URL
  const decodedBytes = atob(decodedString);
  const decoder = new TextDecoder();
  const decodedJSON = decoder.decode(
    new Uint8Array([...decodedBytes].map((char) => char.charCodeAt(0)))
  );
  const parsedObject = JSON.parse(decodedJSON);
  return parsedObject;
};
