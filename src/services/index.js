import { supabase } from "./supabase";

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
