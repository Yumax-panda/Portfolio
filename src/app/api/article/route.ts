import { NextRequest, NextResponse } from 'next/server'
import { QiitaClient } from '@/qiita'
import { ZennClient } from '@/zenn'

// to manage connection pool
const qiitaClient = new QiitaClient()
const zennClient = new ZennClient()

export async function GET(_: NextRequest) {
  const [qiitaPosts, zennPosts] = await Promise.all([
    qiitaClient.fetchPosts(),
    zennClient.fetchPosts(),
  ])

  const articles = [...qiitaPosts, ...zennPosts]
  console.log('articles', articles)

  return NextResponse.json(articles, { status: 200 })
}
