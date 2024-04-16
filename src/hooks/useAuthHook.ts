import { useRouter } from "next/router";

export const useAuthHook = () => {
  const router = useRouter();
  const goToOAuthFB = () => {
    // https://rhino-organic-bison.ngrok-free.app
    const qs = new URLSearchParams({
      client_id: process.env.FACEBOOK_CLIENT_ID,
      redirect_uri: `https://rhino-organic-bison.ngrok-free.app/login/fb/callback`,
      state: "1234",
      response_type: "token",
      // display: "popup",
      auth_type: "rerequest",
      scope:
        "public_profile, instagram_basic, pages_show_list, instagram_manage_comments, pages_read_engagement",
      // scope: ", instagram_basic, pages_show_list",
    });

    //email,instagram_basic,pages_show_list
    // https://www.facebook.com/v19.0/dialog/oauth?
    // response_type=token&display=popup&client_id=949275753220874
    // &redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer%2Fcallback&auth_type=rerequest&scope=
    router.replace(
      `https://www.facebook.com/v19.0/dialog/oauth?${qs}`
      // "popup",
      // "popup=true"
    );
  };
  const goToOAuthIG = () => {
    // https://rhino-organic-bison.ngrok-free.app
    const qs = new URLSearchParams({
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      redirect_uri: "https://rhino-organic-bison.ngrok-free.app/login/callback",
      response_type: "code",
      scope: "user_profile,user_media",
    });
    // https://api.instagram.com/oauth/authorize
    router.replace(
      `https://api.instagram.com/oauth/authorize?${qs}`
      // "popup",
      // "popup=true"
    );
    // Next : https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
  };

  const getIGProfile = async () => {};

  const loginWithFB = async () => {
    const rsp = await getIGProfile();
  };

  return { goToOAuthFB, goToOAuthIG };
};
