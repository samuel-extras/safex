// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { createRootRoute, Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-screen flex-col w-full bg-[#070087]">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-5 sm:pl-64 ">
          <Outlet />
        </div>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
