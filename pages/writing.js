// import Layout from '../components/layout'
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";


export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		// <Layout home>
		<div>
			<h1 className="writingsTitle">Textbook</h1>
			<ul>
				{allPostsData.map(({ id, date, title }, index) => (
					<li key={index}>
						<Link href={`/posts/${id}`}>
							<a className="blogListName">{title}</a>
						</Link>
						<br />
						<span>
							{date}
						</span>
						<br /><br />
					</li>
				))}
			</ul>
			<br />
			<p>Posts</p>
      </div>
    // </Layout>
  );
}