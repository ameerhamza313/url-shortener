import { redirect } from 'next/navigation';
import clientPromise from '@/utils/database';

export default async function Page({ params }) {
  const shorturl = (await params).shorturl;

  const client = await clientPromise;
  const db = client.db('urlshortener');
  const collection = db.collection('url');

  const doc = await collection.findOne({ shorturl: shorturl });
  console.log(doc);
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }

  return <div>My Post: {url}</div>;
}
