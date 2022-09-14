import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://infabode-staging.com/public_api",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

// import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { isEqual, merge } from "lodash";

// const httpLink = createHttpLink({
//   uri: `https://infabode-staging.com/public_api`,
// });

// const accessToken = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       "Content-type": "application/json",
//       // "X-Shopify-Storefront-Access-Token":
//       //   process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//     },
//   };
// });

// const client = new ApolloClient({
//   ssrMode: typeof window === "undefined",
//   link: accessToken.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// let apolloClient;

// function createApolloClient() {
//   let defaultOptions;
//   if (typeof window === "undefined") {
//     //We don't want any cache to be stored server side
//     defaultOptions = {
//       query: {
//         fetchPolicy: "no-cache",
//         errorPolicy: "all",
//       },
//     };
//   } else {
//     //We immediately show results, but check in the background if any changes occured, and eventually update the view
//     defaultOptions = {
//       query: {
//         fetchPolicy: "cache-and-network",
//         errorPolicy: "all",
//       },
//     };
//   }
//   return new ApolloClient({
//     ssrMode: typeof window === "undefined",
//     link: accessToken.concat(httpLink),
//     cache: new InMemoryCache(),
//     defaultOptions,
//   });
// }

// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // get hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = _apolloClient.extract();

//     // Merge the existing cache into data passed from getStaticProps/getServerSideProps
//     const data = merge(initialState, existingCache, {
//       // combine arrays using object equality (like in sets)
//       arrayMerge: (destinationArray, sourceArray) => [
//         ...sourceArray,
//         ...destinationArray.filter((d) =>
//           sourceArray.every((s) => !isEqual(d, s))
//         ),
//       ],
//     });

//     // Restore the cache with the merged data
//     _apolloClient.cache.restore(data);
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === "undefined") return _apolloClient;
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;

//   return _apolloClient;
// }

// export default initializeApollo();
