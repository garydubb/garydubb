import Head from 'next/head'
import * as React from 'react';
import { Typography, Container } from '@mui/material';

import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <>
      <Head>
        <title>garu Dubb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Coming Soon
      </Typography>
      <Typography variant="body1" paragraph>
        Our website is currently under construction. Stay tuned for updates!
      </Typography>
      <Typography variant="caption" color="textSecondary">
        © 2023 Gary Dubb
      </Typography>
    </Container>

        
      </main>
    </>
  )
}
