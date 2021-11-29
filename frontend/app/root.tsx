import * as React from "react";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation
} from "remix";

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="v-gallery" className="remix-app__header-home-link">
            <VGalleryLogo />
          </Link>
          <nav aria-label="Main navigation" className="remix-app__header-nav">
            <ul>
              <li>
                <Link to="/">v_gallery</Link>
              </li>
              <li>
                <a href="https://remix.run/docs">Remix Docs</a>
              </li>
              <li>
                <a href="https://github.com/remix-run/remix">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer>
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// Logo for v_gallery, as svg
function VGalleryLogo() {
  return (
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="200.000000pt" height="45.000000pt" viewBox="0 0 300.000000 62.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,62.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M1370 465 c0 -10 10 -15 30 -15 l30 0 0 -100 0 -100 -35 0 c-24 0
      -35 -5 -35 -15 0 -12 15 -15 75 -15 62 0 75 3 75 16 0 12 -7 15 -25 12 l-25
      -5 0 118 0 119 -45 0 c-33 0 -45 -4 -45 -15z"/>
      <path d="M1580 465 c0 -9 9 -15 25 -15 l25 0 0 -103 0 -104 -30 5 c-23 3 -30
      0 -30 -12 0 -13 13 -16 75 -16 60 0 75 3 75 15 0 10 -10 15 -30 15 l-30 0 0
      115 0 115 -40 0 c-29 0 -40 -4 -40 -15z"/>
      <path d="M522 402 c2 -4 19 -47 38 -95 46 -114 59 -114 106 2 39 97 40 104 17
      99 -11 -2 -25 -30 -43 -83 l-27 -80 -27 83 c-22 66 -31 82 -48 82 -11 0 -18
      -3 -16 -8z"/>
      <path d="M975 388 c-26 -20 -34 -61 -15 -73 8 -5 8 -11 0 -20 -6 -7 -10 -26
      -10 -41 0 -16 -1 -42 -2 -59 -4 -37 31 -58 85 -51 46 5 77 30 77 62 0 29 -14
      37 -75 44 -37 4 -51 10 -53 22 -3 15 2 17 27 12 21 -4 39 -1 57 11 21 14 25
      23 22 51 -3 23 0 34 9 34 7 0 13 6 13 13 0 21 -106 18 -135 -5z m83 -39 c6
      -49 -58 -65 -73 -18 -9 27 13 51 44 47 20 -2 27 -9 29 -29z m16 -140 c17 -16
      -16 -39 -56 -39 -42 0 -59 20 -38 45 13 16 75 12 94 -6z"/>
      <path d="M1188 403 c-10 -2 -18 -10 -18 -17 0 -8 16 -12 48 -12 40 1 47 -2 50
      -20 3 -18 -3 -22 -38 -27 -69 -9 -101 -55 -64 -91 17 -18 79 -22 89 -6 3 6 11
      10 16 10 6 0 7 -4 4 -10 -3 -5 2 -10 12 -10 16 0 18 8 15 80 -3 68 -7 82 -25
      95 -21 15 -53 18 -89 8z m62 -145 c-27 -22 -44 -23 -60 -3 -18 21 3 43 43 47
      40 4 48 -19 17 -44z"/>
      <path d="M1815 398 c-34 -20 -44 -41 -45 -89 0 -64 28 -89 98 -89 41 0 52 3
      52 16 0 13 -7 15 -36 10 -39 -8 -84 13 -84 39 0 12 14 15 66 15 l67 0 -6 37
      c-4 20 -12 42 -19 50 -19 19 -70 25 -93 11z m69 -34 c31 -30 20 -44 -34 -44
      -52 0 -58 7 -40 41 13 23 53 25 74 3z"/>
      <path d="M1990 315 c0 -78 3 -95 15 -95 12 0 15 14 15 64 0 56 3 67 22 80 32
      22 47 20 58 -9 11 -30 40 -33 40 -5 0 25 -34 60 -59 60 -10 0 -30 -9 -44 -20
      -25 -20 -25 -20 -20 0 4 14 0 20 -11 20 -14 0 -16 -14 -16 -95z"/>
      <path d="M2170 405 c0 -3 16 -45 36 -95 35 -86 35 -91 20 -115 -9 -14 -25 -25
      -36 -25 -11 0 -20 -7 -20 -15 0 -24 37 -17 69 13 20 18 44 62 70 131 22 58 38
      107 36 109 -14 15 -36 -16 -56 -77 -13 -39 -25 -71 -29 -71 -3 0 -11 19 -18
      42 -24 75 -41 108 -56 108 -9 0 -16 -2 -16 -5z"/>
      <path d="M712 159 c6 -17 208 -18 208 -1 0 9 -28 12 -106 12 -73 0 -105 -3
      -102 -11z"/>
      </g>
      </svg>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }}
    >
      {innerHtml}
    </div>
  );
});
