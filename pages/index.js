import Link from 'next/link';
import withLayout from '../components/MyLayout';

const Page = () => <>
    <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
</>

const PostLink = props => (
    <li>
         <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
    </li>
);

export default withLayout(Page);