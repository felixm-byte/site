import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://angelhacks.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src={`https://image-store-5tn.pages.dev/public/code-for-impact-logo.png`}
        alt="AngelHacks avatar"
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'slate',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
