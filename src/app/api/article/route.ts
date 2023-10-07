import { NextRequest, NextResponse } from 'next/server'
import { fetchPosts as fetchQiitaPosts } from '@/qiita'
import { fetchPosts as fetchZennPosts } from '@/zenn'

export async function GET(_: NextRequest) {
  const response = await Promise.all([fetchQiitaPosts(), fetchZennPosts()])

  return NextResponse.json(response.flat(), { status: 200 })
}
