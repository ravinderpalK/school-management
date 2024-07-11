import { options } from "@/app/api/auth/[...nextauth]/options";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import RegisterSchoolsForm from "@/components/Register/RegisterSchoolsForm";
import { getServerSession } from "next-auth";
import { FC } from "react";

const School: FC = async () => {
  return (
    <>
      <Breadcrumb pageName="Register School" />
      <RegisterSchoolsForm />
    </>
  );
};

export default School;
