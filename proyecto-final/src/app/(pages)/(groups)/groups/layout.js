'use client'
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
// import Link from "next/link"
import { usePathname } from "next/navigation"

const LINKS = [
  {
      name:'Group1',
      path:'/groups/groupId:1'

  },
  {
      name:'Group2',
      path:'/groups/groupId:2'

  },
  {
      name:'Group3',
      path:'/groups/groupId:3'

  }
]

export default function GroupsLayout ({ children }) {
  const pathname = usePathname()
return (
  <>
  <Navbar/>
  <div className='h-screen flex bg-slate-900 mx-auto p-4 gap-4'>
    <aside className='bg-violet-600 px-20 grid place-items-center rounded-lg relative'>
      <span className='absolute top-4 left-4'>
          Layout
      </span>
      <nav>
          <ul className='flex flex-col gap-10'>
              {LINKS.map(({name , path}) => (
                  <li key={path} className='text-3xl'>
                      {name}
                  </li>
              ))}
          </ul>
      </nav>
      </aside>
      {children}
  </div>
  <Footer/>
  </>
)
}