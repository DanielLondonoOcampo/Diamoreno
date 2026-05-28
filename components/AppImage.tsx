import NextImage, { ImageProps } from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function AppImage(props: ImageProps) {
  const src =
    typeof props.src === 'string' && props.src.startsWith('/')
      ? `${BASE}${props.src}`
      : props.src
  return <NextImage {...props} src={src} />
}
