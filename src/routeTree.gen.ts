/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TermsLazyImport = createFileRoute('/terms')()
const CreateOfferLazyImport = createFileRoute('/create-offer')()
const AcceptOfferLazyImport = createFileRoute('/accept-offer')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TermsLazyRoute = TermsLazyImport.update({
  path: '/terms',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/terms.lazy').then((d) => d.Route))

const CreateOfferLazyRoute = CreateOfferLazyImport.update({
  path: '/create-offer',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/create-offer.lazy').then((d) => d.Route))

const AcceptOfferLazyRoute = AcceptOfferLazyImport.update({
  path: '/accept-offer',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/accept-offer.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/accept-offer': {
      id: '/accept-offer'
      path: '/accept-offer'
      fullPath: '/accept-offer'
      preLoaderRoute: typeof AcceptOfferLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-offer': {
      id: '/create-offer'
      path: '/create-offer'
      fullPath: '/create-offer'
      preLoaderRoute: typeof CreateOfferLazyImport
      parentRoute: typeof rootRoute
    }
    '/terms': {
      id: '/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof TermsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AcceptOfferLazyRoute,
  CreateOfferLazyRoute,
  TermsLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/accept-offer",
        "/create-offer",
        "/terms"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/accept-offer": {
      "filePath": "accept-offer.lazy.tsx"
    },
    "/create-offer": {
      "filePath": "create-offer.lazy.tsx"
    },
    "/terms": {
      "filePath": "terms.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
