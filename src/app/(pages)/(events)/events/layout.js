"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import withAuth from '@/components/withAuth.js';
import { usePathname } from "next/navigation";

const LINKS = [
  {
    name: "Event1",
    path: "/events/eventId:1",
  },
  {
    name: "Event2",
    path: "/events/eventId:2",
  },
  {
    name: "Event3",
    path: "/events/eventId:3",
  },
];

function EventsLayout({ children, createEventModal, joinEventModal }) {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className="h-screen flex bg-gray-100 mx-auto p-4 gap-4">
        <aside className="bg-violet-600 px-20 grid place-items-center rounded-lg relative">
          <span className="absolute top-4 left-4">
            <h1 className="text-xl p-1 text-center">Selecciona un evento para verlo</h1>
          </span>
          <nav>
            <ul className="flex flex-col gap-10">
              {LINKS.map(({ name, path }) => (
                <li key={path} className="text-3xl">
                  {name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="bg-violet-400 place-items-center flex-1 flex px-20 h-full items-center rounded-lg">
          {children}
          {createEventModal}
          {joinEventModal}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(EventsLayout);