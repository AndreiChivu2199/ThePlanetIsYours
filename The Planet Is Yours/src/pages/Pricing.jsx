// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav></PageNav>
      <section>
        <div>
          <h2>
            Straightforward pricing.
            <br />
            Only $9 per month.
          </h2>
          <p>
            With PlanetIsYours, exploring the world has never been easier to
            document. For just $9 per month, enjoy unlimited access to features
            that let you track every journey, add memories from each
            destination, and visually map your adventures across the globe. Our
            simple pricing ensures you get a premium experience with no hidden
            fees—just a straightforward monthly plan to keep your travel stories
            organized and accessible anytime. Start today and see where your
            footsteps have taken you!
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
