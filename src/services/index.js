import { supabase } from "./supabase";
const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL;

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();
  const { data, error } = await supabase.storage
    .from("videos")
    .upload(`uploads/${filename}.mp4`, videoFile);

  const file = data?.Key ? `${prefix}${data.Key}` : "";

  return [error, file];
};

export const publishVideo = async ({ videoSrc, description }) => {
  const defaultAlbum =
    "https://guiaimpresion.com/wp-content/uploads/2020/05/tok-tok.jpg";
  const defaultSong = "fedeaguilera songs";

  const { data, error } = await supabase.from("videos").insert([
    {
      user_id: "727df145-a0f5-49c6-a46b-2af220e28efa",
      description,
      albumCover: defaultAlbum,
      songTitle: defaultSong,
      src: videoSrc,
    },
  ]);

  return [error, data];
};

export const getVideos = async () => {
  let { data, error } = await supabase.from("videos").select(`
      *,user:user_id(
          avatar,
          username,
          id
      )
    
    `);
  return [error, data];
};
