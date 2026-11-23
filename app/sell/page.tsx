import Link from "next/link";
import { Store, MapPin, ShieldCheck } from "lucide-react";

export default function SellPage() {
  return (
    <main className="seller-page">
      <div className="seller-top"><Link href="/">← Back to SOKO HUB</Link><span className="seller-brand">SOKO<span>HUB</span></span></div>
      <section className="seller-panel">
        <div className="seller-kicker"><Store size={15}/> SELL ON SOKO HUB</div>
        <h1>Let Kapkures<br/><em>discover your shop.</em></h1>
        <p className="seller-intro">Bring your business online and reach customers around Kapkures. Seller applications will be reviewed before a shop goes live.</p>
        <div className="seller-benefits">
          <span><MapPin size={17}/> Local customers in Kapkures</span>
          <span><ShieldCheck size={17}/> Reviewed seller accounts</span>
        </div>
        <div className="application-card">
          <h2>Seller application</h2>
          <p>Get your details ready. Online submissions will be enabled when seller accounts and the secure database are connected.</p>
          <form>
            <label>Your full name<input required name="name" placeholder="e.g. Jane Njeri" disabled /></label>
            <label>Phone number<input required name="phone" placeholder="07XX XXX XXX" disabled /></label>
            <label>Shop or business name<input required name="shop" placeholder="Your shop name" disabled /></label>
            <label>Business category<select name="category" disabled defaultValue=""><option value="" disabled>Select a category</option><option>Electronics</option><option>Fashion</option><option>Phones & Accessories</option><option>Home & Furniture</option><option>Beauty & Personal Care</option><option>Groceries</option><option>Shoes</option><option>Other</option></select></label>
            <label>Where is your shop located in Kapkures?<input name="location" placeholder="Estate, road or nearby landmark" disabled /></label>
            <label>Tell customers about your shop<textarea name="description" rows={3} placeholder="What do you sell?" disabled /></label>
            <button type="button" disabled>Applications opening soon</button>
          </form>
          <small>We’ll only activate seller applications after secure submission and admin review are in place.</small>
        </div>
      </section>
      <footer className="seller-footer">SOKO HUB · Made for Kapkures. Built to grow.</footer>
    </main>
  );
}
