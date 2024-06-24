import Link from 'next/link'
import React from 'react'

export default function CourseNav({children}) {
  return (
    <aside>
        <ul>
            <Link href='/course/frontend'>
            <li>frontend</li>
            </Link>
            <Link href='/course/backend'>
            <li>backend</li>
            </Link>
            <Link href='/course/product'>
            <li>product design</li>
            </Link>
        </ul>
    </aside>
  )
}
