export default function RegisterLayout({ children }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <main className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          {children}
        </main>
      </div>
    );
  }
  