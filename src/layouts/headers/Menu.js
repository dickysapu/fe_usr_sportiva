import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home</Link>
    </li>
    
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/faq">Help &amp; FAQ</Link>
    </li>
    <li>
      <Link href="/gallery">Our Gallery</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/service">Booking</Link>
    </li>
  </Fragment>
);

