const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const albumService = {
  // Obtener todos los álbumes
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

  // Obtener un álbum por ID
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

  // Estructurar datos de álbumes con información adicional
  structureAlbums: (albums) => {
    return albums.map(album => ({
      ...album,
      photoCount: Math.floor(Math.random() * 50) + 10, // Simulamos fotos
      formattedId: `Album #${album.id}`,
      formattedTitle: album.title.charAt(0).toUpperCase() + album.title.slice(1)
    }));
  }
};
