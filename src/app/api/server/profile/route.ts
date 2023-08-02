import { NextRequest, NextResponse } from 'next/server';

import { getUserData } from '@/server/services/db';

interface Body {
  userEmail: string;
}

export async function POST(request: NextRequest) {
  const { userEmail }: Body = await request.json();

  const userData = await getUserData(userEmail);

  return NextResponse.json({
    userData,
  });
}
