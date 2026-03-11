"use server";

import { SpotifyAlbum } from "@/types/types.spotify";
import { getTokenSpotify, getAllArtistAlbums, getAlbumTracks } from "./handlerSpotify";

const BTS_ARTIST_ID = "3Nrfpe0tUJi4K4DXYWgMUX";
const CACHE_KEY = "bts_albums_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

interface CachedData {
  albums: SpotifyAlbum[];
  timestamp: number;
}

export const getBTSAlbums = async (): Promise<SpotifyAlbum[]> => {
  try {
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { albums, timestamp }: CachedData = JSON.parse(cached);
        const isExpired = Date.now() - timestamp > CACHE_DURATION;
        
        if (!isExpired) {
          return albums.filter(album => album.album_type === "album");
        }
      }
    }

    const token = await getTokenSpotify();
    const albums = await getAllArtistAlbums(token, BTS_ARTIST_ID);
    const filteredAlbums = albums.filter(album => album.album_type === "album");
    
    if (typeof window !== "undefined") {
      const cacheData: CachedData = {
        albums: filteredAlbums,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    }
    
    return filteredAlbums;
  } catch (error) {
    console.error("[BTS Albums] Failed to load BTS albums:", error);
    return [];
  }
};

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