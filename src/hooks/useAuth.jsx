import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const useAuth = () => {
  return getKindeServerSession();
};

export default useAuth;
