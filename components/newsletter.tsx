"use client";

/** Split out of the footer so the footer itself stays a server component. */
export function Newsletter() {
  return (
    <form className="mt-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="nl" className="text-[13px] font-bold">
        Kabar koleksi baru
      </label>
      <div className="mt-2 flex">
        <input
          id="nl"
          type="email"
          placeholder="Alamat email"
          className="h-11 w-full border border-line-2 border-r-0 bg-paper px-3 text-[14px] outline-none focus:border-ink"
        />
        <button className="h-11 shrink-0 bg-brand px-5 text-[13.5px] font-bold text-white transition hover:bg-brand-dark active:scale-[0.98]">
          Daftar
        </button>
      </div>
    </form>
  );
}
