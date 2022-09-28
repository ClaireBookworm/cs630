import Link from 'next/link'
import { useEffect } from 'react'
import { CgDarkMode } from 'react-icons/cg'
const colors = require('../lib/colors.json')

const links = [
    { label: "Home", href: "/" },
    { label: "Textbook", href: "/writing" },
]

export default function Nav({active}) {
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.style.backgroundColor = colors[~~(Math.random() * colors.length)];
            document.querySelector("#theme_toggle").classList.toggle("rotate-180");
          }
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            const newColorScheme = e.matches ? "light" : "dark";
            if (newColorScheme === "dark") {
                document.body.style.backgroundColor = "#1b1a1f"
                document.body.style.color = "#fff"
                document.body.style.postContent.backgroundColor = "#f0feff"
                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
            } else if (newColorScheme === "light") {
                document.body.style.backgroundColor = colors[~~(Math.random() * colors.length)];
                document.body.style.color = "#000"
                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
            }
        });
        console.log('Made by CS630 2022-2023 Class. All Rights Reserved.')
    })
    return (
        <nav className="text-dark">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
                <li className="hidden sm:block sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10 sm:grid-cols-11 sm:grid-cols-12"></li>
                <ul className={`mx-auto sm:mx-0 grid gap-4 justify-items-center items-center ${links.length + 1 > 4 ? 'grid-cols-3' : 'grid-cols-2'} sm:grid-rows-1 sm:grid-cols-${links.length + 1}`}>
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link href={href}>
                                <a className={`font-inter px-4 py-2 rounded hover:bg-white hover:bg-opacity-10 ${active === label ? 'font-bold bg-white bg-opacity-10' : ''}`}>
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <button
                        onClick={() => {
                            document.body.style.backgroundColor === '' || document.body.style.backgroundColor === 'rgb(0, 0, 0)' ? document.body.style.backgroundColor = colors[~~(Math.random() * colors.length)] : document.body.style.backgroundColor = "#000";
                            document.body.style.color === '' || document.body.style.color === 'rgb(0, 0, 0)' ? document.body.style.color = '#fff' : document.body.style.color = "#000";
                            document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                        }}
                        className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transform duration-200" id="theme_toggle">
                        <CgDarkMode size={24} />
                    </button>
                </ul>
            </ul>
        </nav>
    )
}