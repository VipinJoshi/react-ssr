import Link from 'next/link';

const PostLink = ({ href, show }) => {
    return (
        <>
            <li>
                <Link href={href} as={`/p/${show.id}`}>
                    <a>{show.name}</a>
                </Link>
            </li>
            <style jsx>{`
    a {
      font-family: 'Arial';
    }
    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      text-decoration: none;
      color: blue;
    }

    a:hover {
      opacity: 0.6;
    }
  `}</style>
        </>
    )
};

export default PostLink;