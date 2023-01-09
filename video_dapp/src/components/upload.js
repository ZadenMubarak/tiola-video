import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
   } from '@livepeer/react';
   
   const client = createReactClient({
    provider: studioProvider({ apiKey: '0626dff7-e0c9-4403-b2f9-59041fe28b3a' }),
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
   