import { supabase } from "./supabase";

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();
  const { data, error } = await supabase.storage
    .from("videos")
    .upload(`videos/${filename}.mp4`, videoFile);

  return [error, data];
};

export const publishVideo = async ({ videoSrc, description }) => {
  const { data, error } = await supabase
    .from("videos")
    .upload("videos/", videoFile);
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
