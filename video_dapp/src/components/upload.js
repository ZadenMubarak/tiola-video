import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
   } from '@livepeer/react';
   import { Livepeer } from './Livepeer';
   
   const client = createReactClient({
    provider: studioProvider({ apiKey: 'NlblRiNgpnc1FuQmhnRVhmdkhycDgxNFg0b0lBbVg1VjlnZzh' }),
   });
   
   const livepeerTheme: ThemeConfig = {
    colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
    },
    fonts: {
    display: 'Inter',
    },
   };
   
   function App() {
    return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
    <Livepeer />
    </LivepeerConfig>
    );
   }
   