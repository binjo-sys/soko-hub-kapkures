"use client";

import { useMemo, useState } from "react";
import { Search, ShoppingBag, MapPin, Menu, ArrowRight, Store, ShieldCheck, Truck, Smartphone } from "lucide-react";

const categories = ["All", "Electronics", "Fashion", "Phones", "Home", "Beauty", "Groceries", "Shoes"];
const products = [
  { id: 1, name: "Wireless headphones", shop: "Kapkures Gadgets", category: "Electronics", price: 1850, tag: "Popular", color: "lavender", icon: "🎧" },
  { id: 2, name: "Everyday sneakers", shop: "Fresh Steps", category: "Shoes", price: 2400, tag: "New", color: "peach", icon: "👟" },
  { id: 3, name: "Classic wristwatch", shop: "The Style Corner", category: "Fashion", price: 1600, tag: "Local pick", color: "mint", icon: "⌚" },
  { id: 4, name: "Kitchen storage set", shop: "Mama Njeri Home", category: "Home", price: 950, tag: "Good value", color: "sand", icon: "🍱" },
  { id: 5, name: "Skincare essentials", shop: "Glow & Go", category: "Beauty", price: 1250, tag: "Popular", color: "pink", icon: "🧴" },
  { id: 6, name: "Fresh market basket", shop: "Kapkures Fresh Mart", category: "Groceries", price: 700, tag: "Fresh today", color: "lime", icon: "🥑" },
  { id: 7, name: "Portable Bluetooth speaker", shop: "Kapkures Gadgets", category: "Electronics", price: 2200, tag: "New", color: "blue", icon: "🔊" },
  { id: 8, name: "Everyday crossbody bag", shop: "The Style Corner", category: "Fashion", price: 1350, tag: "Local pick", color: "rose", icon: "👜" },
];

export default function Home() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const shown = useMemo(() => products.filter(p => (active === "All" || p.category === active) && (p.name + p.shop + p.category).toLowerCase().includes(search.toLowerCase())), [active, search]);

  return (
    <main>
      <div className="topline"><span><MapPin size={13}/> Serving Kapkures, Kenya</span><span>Shop local. Shop easy.</span></div>
      <header className="header wrap">
        <a className="brand" href="#"><span className="brand-mark">S</span><span>SOKO<span className="brand-accent">HUB</span><small>YOUR LOCAL MARKETPLACE</small></span></a>
        <nav><a href="#categories">Categories</a><a href="#shops">Local shops</a><a href="/sell">How it works</a></nav>
        <div className="header-actions"><button className="icon-btn mobile-menu" aria-label="Menu"><Menu/></button><button className="cart-btn" aria-label="Shopping cart"><ShoppingBag size={18}/> <span>Cart</span><b>{cart.length}</b></button></div>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> KAPKURES&apos; LOCAL MARKETPLACE</div>
          <h1>Your neighbourhood.<br/><em>One marketplace.</em></h1>
          <p>Discover great finds from shops around Kapkures. Browse local, support local, and get what you need without the hassle.</p>
          <a className="primary-btn" href="#products">Explore products <ArrowRight size={17}/></a>
          <div className="hero-proof"><span><ShieldCheck size={16}/> Local sellers</span><span><Truck size={16}/> Local delivery</span><span><Smartphone size={16}/> Easy M-PESA checkout*</span></div>
          <small className="disclaimer">*M-PESA checkout will be enabled in a later launch phase.</small>
        </div>
        <div className="hero-art" aria-label="Shopping bags and local market illustration">
          <div className="sun"></div><div className="float-card card-one">🛍️<span>Shop nearby</span></div><div className="market-bag bag-back"></div><div className="market-bag bag-front"><b>SOKO<br/>HUB</b></div><div className="plant">✳</div><div className="art-caption">GOOD THINGS<br/>ARE CLOSE BY.</div>
        </div>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><span><Store/> Independent local shops</span><span><MapPin/> Focused on Kapkures</span><span><ShieldCheck/> A marketplace you can trust</span></div></section>

      <section id="categories" className="section wrap">
        <div className="section-heading"><div><div className="eyebrow">FIND YOUR SOMETHING</div><h2>Shop by category</h2></div><span className="muted">A little bit of everything, close to home.</span></div>
        <div className="category-row">{categories.slice(1).map((c, i) => <button key={c} className="category-pill" onClick={() => {setActive(c); document.getElementById("products")?.scrollIntoView({behavior:"smooth"});}}><span>{["⚡","👕","📱","🏡","✨","🥬","👟"][i]}</span>{c}</button>)}</div>
      </section>

      <section id="products" className="section products-section">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow">THE LOCAL FINDS</div><h2>Popular around here</h2></div><span className="muted">Sample products for the storefront preview</span></div>
          <div className="product-tools"><div className="filters">{categories.map(c => <button key={c} className={active===c?"filter active":"filter"} onClick={() => setActive(c)}>{c}</button>)}</div><label className="search-box"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products or shops"/></label></div>
          <div className="product-grid">{shown.map(p => <article className="product-card" key={p.id}><div className={"product-art "+p.color}><span className="product-tag">{p.tag}</span><span className="product-emoji">{p.icon}</span><button className="quick-add" onClick={()=>setCart(old=>[...old,p.id])} aria-label={"Add "+p.name+" to cart"}>+</button></div><div className="product-info"><small>{p.shop}</small><h3>{p.name}</h3><div className="product-bottom"><strong>KSh {p.price.toLocaleString("en-KE")}</strong><button onClick={()=>setCart(old=>[...old,p.id])}>Add to cart</button></div></div></article>)}</div>
          {shown.length===0 && <p className="empty">No matching products yet. Try another search.</p>}
          <p className="demo-note">Storefront preview: products and shop names shown here are sample content, not live seller listings.</p>
        </div>
      </section>

      <section id="shops" className="seller-banner wrap"><div><div className="eyebrow">GOT A SHOP IN KAPKURES?</div><h2>Bring your shop<br/>to SOKO HUB.</h2><p>Reach more nearby customers and manage your products in one place.</p><a className="dark-btn" href="#how">Become a seller <ArrowRight size={16}/></a></div><div className="seller-graphic"><div className="shop-window">SOKO<br/><b>SELLER</b><span>OPEN</span></div><span className="seller-spark">✳</span></div></section>

      <section id="how" className="section wrap how-section"><div className="eyebrow">SIMPLE FROM START TO FINISH</div><h2>Local shopping, made easier.</h2><div className="steps"><div><b>01</b><h3>Find your shop</h3><p>Explore products from participating Kapkures businesses.</p></div><div><b>02</b><h3>Choose your items</h3><p>Compare options and add what you need to your basket.</p></div><div><b>03</b><h3>Order locally</h3><p>Arrange local delivery or pickup with the seller.</p></div></div></section>
      <footer><div className="wrap footer-inner"><a className="brand footer-brand" href="#"><span className="brand-mark">S</span><span>SOKO<span className="brand-accent">HUB</span><small>YOUR LOCAL MARKETPLACE</small></span></a><p>Made for Kapkures. Built to grow.</p><small>© {new Date().getFullYear()} SOKO HUB</small></div></footer>
    </main>
  );
}
