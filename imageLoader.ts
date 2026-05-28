export default function imageLoader({ src }: { src: string }) {
  if (process.env.NODE_ENV !== 'production') return src
  return src.startsWith('/') ? `/Diamoreno${src}` : src
}
