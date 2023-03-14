'use client'
import { useThemeContext } from '../Context/theme'
import Link from 'next/link'
import { useTheme } from "next-themes";

export default function Second() {
  const { counter, setCounter } = useThemeContext();
  const { theme, setTheme } = useTheme();

  return (
  <div>
    <h1 className="text-5xl text-center text-re font-bold">Third page</h1>
    <div className="w-full h-screen flex items-center justify-center">
      <section className="">

        <div className="flex items-center pb-3">
        <p className="font-semibold text-lg px-3">Current counter:</p>
            <p className="font-semibold underline text-lg pr-3"> {counter} </p>

          <button onClick={() => setCounter(counter + 1)} className="relative inline-flex items-center justify-between p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white">+ 1</span>
          </button>
        </div>

        <div className="pb-3 py-3">
          <p><Link className="font-medium text-blue-600 pb-3 dark:text-blue-500 hover:underline" href="/">Goto main page</Link></p>
        </div>

        <button onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Change mode</span>

          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button>
      </section>
    </div>
  </div>
  )
}
