import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
      <header>
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-rose-400 rounded-2xl">
          <div className="text-center text-4xl font-semibold whitespace-nowrap text-rose-900 ">
            Photo Gallery
          </div>
        </nav>
      </header>
      <Gallery />
    </>
  )
}
