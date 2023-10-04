import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'node-html-parser'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'url query is missing' }, { status: 400 })
  }

  const response = await fetch(url, {
    headers: {
      'Allow-Cross-Origin-Origin': '*',
    },
  })
  const text = await response.text()
  const doc = parse(text)
  const ogImage = doc.querySelector('meta[property="og:image"]')
  if (ogImage) {
    const imageUrl = ogImage.getAttribute('content')
    return NextResponse.json({ url: imageUrl }, { status: 200 })
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}
