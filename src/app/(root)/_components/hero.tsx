export default function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-slate-900 to-blue-800 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/soft-circle-scales.png')" }}></div>
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
        Discover Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Chapter</span>
      </h1>
      <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
        Journey through thousands of stories and knowledge from around the world
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search books, authors, genres..."
            className="w-full pl-6 pr-32 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:outline-none focus:border-blue-400 placeholder:text-slate-200"
          />
          <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}