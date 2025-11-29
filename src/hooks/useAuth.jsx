import React, { use } from "react";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";
const useAuth = () => {
  const authInfo = use(FirebaseAuthContext);

  return authInfo;
};

export default useAuth;