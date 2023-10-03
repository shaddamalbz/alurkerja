import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-6 h-screen">
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-main-blue-alurkerja mb-2">Alurkerja Docs</h1>
          <p className="text-gray-alurkerja-1">Useful library to build CRUD</p>
          <Link className="hover:text-main-blue-alurkerja hover:underline" href="/docs">
            Docs &gt;
          </Link>
        </div>
      </div>
    </main>
  )
}
