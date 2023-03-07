import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Card, Button } from "flowbite-react";
import Hero from '../components/Hero/hero';

export default function Home() {
  return (
    <div className='flex w-screen h-screen '>
      <Hero></Hero>
    </div>
  )
}
