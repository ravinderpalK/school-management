import { options } from "@/app/api/auth/[...nextauth]/options";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import RegisterSchools from "@/components/Register/RegisterSchools";
import { getServerSession } from "next-auth";
import { FC } from "react";

const School: FC = async () => {
  const session = await getServerSession(options);
  return (
    <>
      <Breadcrumb pageName="Register School" />
      <RegisterSchools />;
    </>
  );
};

export default School;
