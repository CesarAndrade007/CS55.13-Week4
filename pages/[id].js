import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
      <article className="card col-2">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-text">DOB: {itemData.birthdate}</h6>
          <p className="card-subtitle mb-2 text-muted">Phone: {itemData.phone}</p>
          <a href={'mailto:' + itemData.email} className="card-link">Email: {itemData.email}</a>
        </div>
      </article>
  );
}