import Navbar from "@/app/components/navbar";  

export default function FriendsLayout({ children }) {
    return (
        <>
        <Navbar/>
      <div>
        <main>
          {children}
        </main>
      </div>
      </>
    );
  }
  