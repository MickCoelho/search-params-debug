import Image from "next/image";
import styles from "../page.module.css";

interface CatchAllPageProps {
  params: {
    slug?: string[];
  };
  searchParams?: { [key: string]: string };
}

export const dynamicParams = false;

// Simulate a fetch function with a 200ms delay
async function fetchData(slug: string[]) {
  return new Promise<{ data: string }>((resolve) => {
    setTimeout(() => {
      resolve({ data: `Fetched data for /${slug.join('/')}` });
    }, 5000);
  });
}

export default async function CatchAllPage({ params, searchParams }: CatchAllPageProps) {
  console.log('searchParams', searchParams?.bar);
  
  const slug = params.slug || [];
  const { data } = await fetchData(slug);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          You are on the page: <code className={styles.code}>{slug.length > 0 ? `/${slug.join('/')}` : '/'}</code>
        </p>
        <p>{data}</p>
        <p>Search params: { searchParams?.bar}</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // Example static paths, you can customize this as needed
  return [
    { slug: [] },
    { slug: ["about"] },
    { slug: ["test"] },
    { slug: ["pricing"] },
    { slug: ["contact"] },
  ];
}
