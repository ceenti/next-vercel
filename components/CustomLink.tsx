import React, { CSSProperties, FC }  from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  label: string,
  href: string
}

const style: CSSProperties = {
  backgroundColor: '#0070f3'
}
const CustomLink : FC <LinkProps> = ({label, href}) =>{
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={ asPath === href ? style : undefined}>
        {label}
      </a>
    </Link>
  )
}

export default CustomLink;
