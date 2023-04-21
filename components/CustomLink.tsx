import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  label: string,
  href: string
}

const style = {
  // color: '#00703f',
  // textDecoration: 'underline',
  backgroundColor: '#0070f3'
}
const CustomLink = (props: LinkProps) => {
  const { asPath } = useRouter();
  const { label, href } = props;
  return (
    <Link href={href} legacyBehavior>
      <a style={ asPath === href ? style : {}}>
        {label}
      </a>
    </Link>
  )
}

export default CustomLink;
