import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

const useLoggedInUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const getCurrentUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const userDetail = await supabase
        .from("users")
        .select()
        .eq("user_id", user?.id)
        .single();
      setCurrentUser(userDetail.data);
    };
    getCurrentUser();
  }, []);
  return { currentUser };
};

export default useLoggedInUser;
