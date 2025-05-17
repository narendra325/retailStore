import React from 'react'
import { Hero } from '../components/Layout/Hero'
import GenterCollections from '../components/Products/GenterCollections'
import CardCorouel from '../components/Products/CardCorouel'
import ProductCard from '../components/Products/ProductCard'
import ProductGrid from '../components/Products/ProductGrid'
import Banner from '../components/Products/Banner'
import { FeatureSection } from '../components/Products/FeatureSection'


const similarProducts = [
  {
    _id: 1,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 2,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 3,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 4,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 5,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 6,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 7,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 8,
    name: "Shirt",
    Price: 400,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket 1",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenterCollections/>
        <CardCorouel/>
        <ProductCard/>
        <div>
          <h2 className='text-2xl font-bold text-center'>Womens new Arraival</h2>
        <ProductGrid products={similarProducts}/>
        </div>
        <Banner/>
        <FeatureSection/>
    </div>
  )
}

export default Home