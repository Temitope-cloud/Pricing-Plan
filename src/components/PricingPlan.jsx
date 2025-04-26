import React from "react";
import { useTheme } from "@/context/ThemeContext";

const PricingPlan = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex h-screen justify-center bg-green-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <button
          onClick={toggleTheme}
          className="rounded bg-gray-800 px-4 py-2 text-white transition dark:bg-white dark:text-black"
        >
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
        <div className="w-full">
          {/* Plans */}
          <div>
            {/* Title */}
            <div>
              <p className="text-center text-3xl font-semibold text-gray-950 dark:text-white">
                Plans that works
              </p>
              <p className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-center text-4xl font-semibold text-transparent">
                Best for your businesses
              </p>
            </div>
            {/* Features */}
            <div className="mt-5 mb-5 flex flex-wrap justify-center gap-3 font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-1">
                <i className="bx bx-dollar-circle"></i>
                <p>1 time purchase</p>
              </div>
              <div className="flex items-center gap-1">
                <i className="bx bx-list-check"></i>
                <p>All the features in every plan</p>
              </div>
              <div className="flex items-center gap-1">
                <i className="bx bxs-wallet-alt"></i>
                <p>30 days Money back guarantee</p>
              </div>
            </div>
            {/* Happy Customers */}
            <div className="mt-2 flex items-center justify-center">
              {/* Avatars */}
              {[774909, 1239291, 31696377, 3756679, 4063856].map((id) => (
                <img
                  key={id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                  alt=""
                />
              ))}
              {/* stars */}
              <div className="ms-2 flex flex-col">
                <div className="leading-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bx bxs-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  from 1000+ happy customers
                </p>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="mx-10 mt-20 grid gap-5 md:grid-cols-3">
              {/* Personal Plan */}
              <div className="flex-1 rounded-lg bg-white p-5 shadow shadow-black/30 dark:bg-gray-800 dark:text-white">
                <div>
                  <i className="bx bx-user-circle text-xl"></i>
                </div>
                <p className="font-semibold">Personal</p>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  For Basic Users
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-semibold">$37</p>
                  <p className="font-light text-gray-300 line-through">$50</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mt-5 w-full rounded-lg border-2 border-gray-700 py-1 font-medium dark:border-white">
                    Buy License
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2 border-b border-gray-200 pb-5 text-sm dark:border-gray-600">
                  <i className="bx bx-desktop text-gray-400 dark:text-gray-300"></i>
                  <p className="text-gray-500 dark:text-gray-300">1 Device</p>
                </div>

                {/*Plan Features */}
                {[
                  "Basic features",
                  "1 workspace",
                  "E-mail support",
                  "One year updates",
                  "Limited License",
                ].map((feature, i) => (
                  <div key={i} className="mt-2 flex items-center gap-1 text-sm">
                    <i className="bx bx-check-circle text-gray-600 dark:text-green-400"></i>
                    <p className="font-medium text-gray-800 underline underline-offset-2 dark:text-gray-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Standard Plan */}
              <div className="relative h-fit flex-1 overflow-hidden rounded-lg bg-black/88 p-5 text-white shadow shadow-black/30">
                <div className="absolute top-0 right-0 h-30 w-30 rounded-full bg-green-500 blur-3xl"></div>
                <div className="w-fit rounded-full bg-green-600/70 p-3 px-[14px] text-white backdrop-blur-2xl">
                  <i className="bx bx-cloud-lightning rounded text-xl"></i>
                </div>
                <p className="font-semibold">Standard</p>
                <p className="text-xs text-gray-400">For Standard Users</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-semibold">$59</p>
                  <p className="font-light text-gray-300 line-through">$71</p>
                </div>
                <button className="mt-5 w-full rounded-lg border-2 border-gray-200 py-1 font-medium">
                  Buy License
                </button>
                <div className="flex items-center justify-around border-b border-gray-200">
                  {["3 Devices", "AI Supported"].map((label, i) => (
                    <div
                      key={i}
                      className="mt-3 flex items-center gap-2 pb-5 text-sm"
                    >
                      <i
                        className={`bx ${i === 0 ? "bx-desktop" : "bx-bot"}`}
                      ></i>
                      <p>{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-col justify-center gap-3">
                  <p className="text-lg font-medium">
                    Everything in Personal, plus:
                  </p>
                  {[
                    "30GB data storage",
                    "5 workspaces",
                    "Priority support",
                    "Enhanced analysis",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm">
                      <i className="bx bx-check-circle"></i>
                      <p className="font-medium underline underline-offset-2">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex-1 rounded-lg bg-white p-5 shadow shadow-black/30 dark:bg-gray-800 dark:text-white">
                <div>
                  <i className="bx bx-trophy text-xl"></i>
                </div>
                <p className="font-semibold">Enterprise</p>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  For advanced Users
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-semibold">$99</p>
                  <p className="font-light text-gray-300 line-through">$123</p>
                </div>
                <button className="mt-5 w-full rounded-lg border-2 border-gray-700 py-1 font-medium dark:border-white">
                  Buy License
                </button>
                <div className="mt-3 flex items-center gap-2 border-b border-gray-200 pb-5 text-sm dark:border-gray-600">
                  <i className="bx bx-desktop text-gray-400 dark:text-gray-300"></i>
                  <p className="text-gray-500 dark:text-gray-300">1 Device</p>
                </div>

                <div className="mt-2 flex flex-col justify-center gap-3">
                  <p className="text-lg font-medium">
                    Everything in Standard, plus:
                  </p>
                  {[
                    "Advanced pro features",
                    "Enterprise Integrations",
                    "50GB data storage",
                    "Limited Analysis",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm">
                      <i className="bx bx-check-circle text-gray-600 dark:text-green-400"></i>
                      <p className="font-medium text-gray-800 underline underline-offset-2 dark:text-gray-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prices In USD */}
            <div className="mt-5 text-center text-sm text-gray-500 dark:text-gray-300">
              <p>Prices are in USD. Terms may apply.</p>
              <div className="flex items-center justify-center gap-2">
                <i className="bx bx-lock"></i>
                <span>Payments are secured by Stripe.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
