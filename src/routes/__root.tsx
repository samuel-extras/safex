// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { createRootRoute, Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/Sidebar";
import MobileSideBar from "@/components/MobileSideBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-screen flex-col w-full bg-[#070087] mx-auto">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-5 md:pl-64 ">
          <div className="flex items-center justify-between md:hidden">
            <MobileSideBar />
            <a href="https://safe-excrow.com" className="mx-auto">
              <div className="flex items-center -space-x-2  mx-auto">
                <img src="/logo.png" alt="" className="h-16 w-auto " />
                <img src="/safe-x.png" alt="" className="h-9 w-auto" />
              </div>
            </a>
          </div>
          <Outlet />
        </div>
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
