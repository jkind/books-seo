const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? "https://snazzy-faloodeh-69e11b.netlify.app" : 'http://localhost:3000'