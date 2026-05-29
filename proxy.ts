import { NextRequest, NextResponse } from 'next/server'

const basicAuthUser = process.env.BASIC_AUTH_USER
const basicAuthPassword = process.env.BASIC_AUTH_PASSWORD

function unauthorized(message = 'Authentication required') {
  return new NextResponse(message, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected"',
    },
  })
}

export function proxy(request: NextRequest) {
  if (!basicAuthUser || !basicAuthPassword) {
    return unauthorized('Basic auth is not configured')
  }

  const authHeader = request.headers.get('authorization')

  if (!authHeader?.startsWith('Basic ')) {
    return unauthorized()
  }

  const encodedCredentials = authHeader.split(' ')[1]
  let decodedCredentials = ''

  try {
    decodedCredentials = atob(encodedCredentials)
  } catch {
    return unauthorized()
  }

  const separatorIndex = decodedCredentials.indexOf(':')

  if (separatorIndex === -1) {
    return unauthorized()
  }

  const user = decodedCredentials.slice(0, separatorIndex)
  const password = decodedCredentials.slice(separatorIndex + 1)

  if (user !== basicAuthUser || password !== basicAuthPassword) {
    return unauthorized()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
