// eslint-disable-next-line no-undef
const apiKey = process.env.FLICKR_API_KEY;

const buildPhotoSearchUrl = (query, {page, perPage}) => {
  const params = `&api_key=${apiKey}&text=${query}&extras=owner_name&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`;
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&${params}`
}

const postPhotoSearch = async (query, pagination ) => {
  const response = await fetch(
    buildPhotoSearchUrl(query, pagination),
    {
      method:'POST'
    }
  );

  const data = await response.json();
  if (response.ok) {
    const photos = data.photos.photo.map((image) => ({
      id: image.id,
      url: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
      title: image.title,
      owner: image.owner
    }));
    return {
      photos,
      totalPages: data.photos.pages
    }
  } else {
    throw new Error(data.message);
  }
}

export default postPhotoSearch;
