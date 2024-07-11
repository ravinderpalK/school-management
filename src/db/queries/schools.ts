"use server"
import db from "../db";

export const addSchool = async (data : any) => {
  const school = await db.schools.create({
    data
  })
  return school;
}

export const getAllSchools = async () => {
  const schools = await db.schools.findMany();
  return schools;
}

