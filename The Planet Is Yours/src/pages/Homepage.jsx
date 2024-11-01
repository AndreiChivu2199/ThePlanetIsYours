import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav></PageNav>

      <section>
        <h1>
          Explore the world.
          <br />
          PlanetIsYours records your journeys.
        </h1>
        <h2>
          A world map that traces your footsteps across every city you visit.
          Capture your unforgettable experiences and share the journey of your
          global adventures with friends.
        </h2>
        <Link to="/login" className="cta">
          Begin your journey tracking now.
        </Link>
      </section>
    </main>
  );
}
