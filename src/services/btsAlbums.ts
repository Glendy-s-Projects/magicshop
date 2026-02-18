import { SpotifyAlbum } from "@/types/types.spotify";
import { getTokenSpotify, getAllArtistAlbums, getAlbumTracks } from "./handlerSpotify";
import { unstable_cache } from "next/cache";

const BTS_ARTIST_ID = "3Nrfpe0tUJi4K4DXYWgMUX";

const getBTSAlbumsUncached = async (): Promise<SpotifyAlbum[]> => {
  try {
    const token = await getTokenSpotify();
    const albums = await getAllArtistAlbums(token, BTS_ARTIST_ID);
    const filteredAlbums = albums.filter(album => album.album_type === "album");
    
    return filteredAlbums;
  } catch (error) {
    console.error("[BTS Albums] Failed to load BTS albums:", error);
    return [];
  }
};

// Cache the BTS albums data for 24 hours using Next.js server-side caching
// Note: unstable_cache is the standard way to cache server functions in Next.js App Router
export const getBTSAlbums = unstable_cache(
  getBTSAlbumsUncached,
  ["getBTSAlbums"], // Unique cache key for this function
  {
    revalidate: 86400 // 24 hours in seconds
  }
);

export const getRandomSongFromAlbum = async (albumId: string): Promise<string | null> => {
  try {
    const token = await getTokenSpotify();
    const tracks = await getAlbumTracks(token, albumId);
    
    if (tracks.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randomIndex].name;
  } catch (error) {
    console.error("[BTS Albums] Failed to get random song:", error);
    return null;
  }
};