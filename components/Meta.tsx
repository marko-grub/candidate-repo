import React from 'react';
import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Candidate App</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Candidate App',
  description: '4 simple tasks for candidate',
  keywords: 'candidate, app, nextjs, typescript, tailwindcss, graphql, apollo',
};

export default Meta;
