import BookCard from './components/BookCard'

const books = [
  {
    id: 1,
    title: '嫌われる勇気',
    author: '岸見一郎・古賀史健',
    rating: 5,
    comment: '対話形式で読みやすく、日々の悩みを別の角度から見つめ直せる一冊です。',
  },
  {
    id: 2,
    title: 'コンビニ人間',
    author: '村田沙耶香',
    rating: 4,
    comment: '自分らしく生きるとは何かを、軽やかな文章と鋭い視点で考えさせてくれます。',
  },
  {
    id: 3,
    title: '夜は短し歩けよ乙女',
    author: '森見登美彦',
    rating: 5,
    comment: '京都の街を舞台にした不思議な恋の物語。読むと少しだけ街を歩きたくなります。',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-slate-900 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl text-white sm:mb-14">
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-amber-300">MY BOOKSHELF</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">書籍紹介ページ</h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            読んだあとも心に残っている、おすすめの3冊を紹介します。
          </p>
        </header>

        <section aria-label="おすすめの本" className="grid gap-5 md:grid-cols-3">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
