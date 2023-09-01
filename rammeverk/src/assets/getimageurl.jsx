export function getImageUrl(person, size = "s") {
  return "https://unsplash.com/photos/" + person.imageId + size + ".jpg";
}
