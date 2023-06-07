export default {
    Auth: {
      region: "us-west-2",
      userPoolId: "us-west-2_zs3kXHjja",
      userPoolWebClientId: "4e85upjjv08mrd3s14bng9qd7d",
      oauth: {
        domain: "aghda-test.auth.us-west-2.amazoncognito.com",
        scope: ["userinfo.email", "openid", "userinfo.profile"],
        redirectSignIn: "http://localhost:8084",
        redirectSignOut: "http://localhost:8084/About",
        responseType: "code",
      },
    },
  };