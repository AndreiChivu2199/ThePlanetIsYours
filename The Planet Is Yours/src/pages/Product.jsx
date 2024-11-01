import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav></PageNav>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About ThePlaentIsYours.</h2>
          <p>
            PlanetIsYours is your personal travel companion, designed to keep
            track of your every adventure and allow you to revisit and share
            each experience with ease. From vibrant cities to hidden gems,
            PlanetIsYours lets you mark each destination, upload photos, and log
            your thoughts along the way. Whether you're a seasoned traveler or
            just starting your journey, PlanetIsYours makes it easy to capture
            and relive every moment.
          </p>
          <p>
            With PlanetIsYours, mapping your travels is as exciting as the
            journeys themselves. Our interactive world map lets you see at a
            glance all the places you've visited, with options to add stories,
            share your progress with friends, and set goals for future trips.
            Each adventure becomes part of your personalized world map, offering
            a lifetime record of the places you've explored and memories you've
            made.
          </p>
        </div>
      </section>
    </main>
  );
}
