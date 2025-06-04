'use server';

import { getConnection } from "@/lib/db";

export async function getPlans() {
  const conn = await getConnection();
  const [plans] = await conn.execute('SELECT * FROM availablepackages');
  await conn.end();

  console.log(plans);

  return {
    plans: plans,
  }
}