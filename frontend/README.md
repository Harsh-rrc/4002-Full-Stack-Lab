# Pixell River Employee Directory - Frontend

This is the React frontend for the Pixell River Employee Directory application. It provides a user interface for viewing employees, managing organization roles, and authenticated CRUD operations.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router DOM
- Clerk Authentication
- TanStack Query (React Query)

## Getting Started

```bash
npm install
npm run dev
```

## Lab 5.2 Integration

### What change was made in the application

For Lab 5.2, I integrated **TanStack Query (React Query)** to replace all scratch-built `useEffect` + `fetch` data fetching patterns across the application. Previously, every component managed its own loading, error, and caching states manually. I also added full **DELETE** functionality for both employees and organization roles, which now gives the app complete CRUD capabilities. The frontend pages `Employees.tsx` and `Organization.tsx` were refactored to use custom TanStack Query hooks (`useDepartments`, `useRoles`, `useEmployeeMutations`, `useRoleMutations`), while the `AddEmployeeForm` and `AddRoleForm` components now use mutation hooks that automatically invalidate and update the cached data after successful create or delete operations.

### What tool or tools were used to make this change

The primary tool used was **TanStack Query v4** (`@tanstack/react-query`), a powerful server-state management library for React. It provides built-in caching, background refetching, optimistic updates, and mutation state tracking. By wrapping the application in a `QueryClientProvider` and defining custom hooks, I eliminated repetitive `useEffect` boilerplate and gained declarative control over server data. No additional state management library like Redux or Zustand was needed because TanStack Query handles server state natively.

### How this change affects the user experience

Users now experience faster and more reliable data loading because TanStack Query caches API responses and only refetches when data becomes stale. The UI provides clear loading states (`isLoading`, `isPending`) during fetch and mutation operations, and errors are surfaced gracefully without crashing the page. The new **Delete** buttons allow authenticated users to remove employees and roles directly from the list, with instant UI updates powered by cache invalidation. Users no longer see flickering or duplicated network requests when navigating between pages because the cache persists across route changes.

### How this change affects conceptual understanding of the app

This integration fundamentally shifted how I conceptualize data flow in the application. Before, I viewed data fetching as a side effect tied to component lifecycles. With TanStack Query, server state is now treated as a **synchronized cache** rather than local state. This separation between server state and client state makes the architecture cleaner: components focus on rendering, while hooks handle data synchronization. I now understand the value of declarative data fetching, automatic background refetching, and the `stale-while-revalidate` pattern. The addition of DELETE operations also reinforced the importance of proper cache invalidation strategies to keep the UI consistent with the database.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

Deploy the `dist` folder to Vercel or any static hosting provider.
