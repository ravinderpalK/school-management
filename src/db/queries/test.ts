"use server"

import db from "../db";

export const addSchoolSecond = async (data : any) => {
  const school = await db.schools.create({
    data
  })
  return school;
}