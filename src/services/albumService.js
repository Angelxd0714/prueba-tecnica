const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const albumService = {
  getAllAlbums: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error al obtener los álbumes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  },

  getAlbumById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el álbume');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching album:', error);
      throw error;
    }
  },

  structureAlbums: (albums) => {
    return albums.map(album => ({
      ...album,
      photoCount: Math.floor(Math.random() * 50) + 10,
      formattedId: `Album #${album.id}`,
      formattedTitle: album.title.charAt(0).toUpperCase() + album.title.slice(1)
    }));
  }
};
