/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { getCSP, SELF, INLINE, DATA, BLOB, EVAL } = require('csp-header')

const DEV = process.env.NODE_ENV === 'development'

module.exports = require('next-optimized-images')({
	headers: () => [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'Access-Control-Allow-Origin',
					value: process.env.NEXT_PUBLIC_ORIGIN
				},
				{
					key: 'Content-Security-Policy',
					value: getCSP({
						directives: {
							'default-src': [SELF],
							'connect-src': [
								SELF,
								`https://us-central1-${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.cloudfunctions.net`,
								'https://*.googleapis.com',
								'https://*.algolia.net',
								'https://*.algolianet.com',
								'https://api.stripe.com'
							],
							'font-src': [SELF, 'https://fonts.gstatic.com'],
							'style-src': [SELF, INLINE, 'https://fonts.googleapis.com'],
							'script-src': [
								SELF,
								...(DEV ? [EVAL] : []),
								"'sha256-Nqnn8clbgv+5l0PgxcTOldg8mkMKrFn4TvPL+rYUUGg='", // Render-blocking script
								'https://apis.google.com',
								'https://js.stripe.com'
							],
							'img-src': [
								SELF,
								DATA,
								BLOB,
								'https://www.google.com',
								`https://storage.googleapis.com/${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/`,
								'https://avatars.githubusercontent.com'
							],
							'object-src': [SELF, DATA],
							'frame-src': [
								SELF,
								`https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
								'https://js.stripe.com',
								'https://hooks.stripe.com',
								'https://www.dailymotion.com/embed/video/',
								'https://open.spotify.com/embed/',
								'https://www.youtube.com/embed/',
								'https://player.vimeo.com/video/',
								'https://www.instagram.com/',
								'https://twitter.com/',
								'https://www.google.com/maps/',
								'https://flickr.com/',
								'https://www.facebook.com/'
							],
							'base-uri': SELF,
							'upgrade-insecure-requests': !DEV
						}
					})
				},
				{ key: 'Expect-CT', value: '0' },
				{ key: 'Referrer-Policy', value: 'no-referrer' },
				{ key: 'Strict-Transport-Security', value: 'max-age=15552000' },
				{ key: 'X-Content-Type-Options', value: 'nosniff' },
				{ key: 'X-DNS-Prefetch-Control', value: 'off' },
				{ key: 'X-Download-Options', value: 'noopen' },
				{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
				{ key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
				{ key: 'X-XSS-Protection', value: '0' }
			]
		}
	]
})
