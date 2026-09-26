function BookCard({ title, author, rating, comment }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wide text-amber-800">
          PICK UP
        </span>
        <span className="text-lg tracking-widest text-amber-500" aria-label={`${rating} out of 5 stars`}>
          {'★'.repeat(rating)}
          <span className="text-slate-200">{'★'.repeat(5 - rating)}</span>
        </span>
      </div>
      <h2 className="text-xl font-bold leading-snug text-slate-900">{title}</h2>
      <p className="mt-2 text-sm font-medium text-slate-500">著者：{author}</p>
      <p className="mt-6 flex-1 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-600">
        {comment}
      </p>
    </article>
  )
}

export default BookCard
