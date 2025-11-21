import { fetchUserAlbums } from "../utils/data";


export default async function AlbumList({ userId }) {
  const albums = await fetchUserAlbums(userId);

  return (
    <div className="bg-green-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">User Albums:</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="list-disc ml-4">{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
