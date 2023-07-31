import { NextResponse } from 'next/server';

import { findUsers } from '@/server/services/db';

export async function GET() {
  const users = await findUsers();

  return NextResponse.json({ users: users });
}
