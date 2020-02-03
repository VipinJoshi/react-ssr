import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <PostLink key={show.id} href="/p/[id]" key={show.id} show={show} />
            ))}
        </ul>
        <style jsx>{`
        h1
         {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;