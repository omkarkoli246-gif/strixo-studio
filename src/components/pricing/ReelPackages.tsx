"use client";

import { motion } from "framer-motion";

const reels = [
  {
    title: "Starter Monthly",
    price: "₹10,999",
    subtitle: "8 Reels / Month",
    gradient: "from-cyan-500 to-blue-500",

    features: [
      "Professional Reel Editing",
      "Captions & Effects",
      "4K Export",
      "Instagram Optimized",
      "Fast Delivery",
    ],
  },

  {
    title: "Growth Monthly",
    price: "₹18,999",
    subtitle: "15 Reels / Month",
    gradient: "from-violet-500 to-purple-500",

    features: [
      "15 Premium Reels",
      "Trending Style Editing",
      "Advanced Transitions",
      "Branding Support",
      "Priority Delivery",
    ],
  },

  {
    title: "Premium Monthly",
    price: "₹34,999",
    subtitle: "30 Reels / Month",
    gradient: "from-orange-400 to-pink-500",

    features: [
      "30 High-End Reels",
      "Daily Content Strategy",
      "Professional Branding",
      "Viral Editing Style",
      "Dedicated Support",
    ],
  },
];

export default function ReelPackages() {
  return (
    <section className="section-spacing px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            REEL PACKAGES
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">

            Viral Content Solutions

          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">

            Professional reel editing packages designed
            to grow your social media presence faster.

          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">

          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[35px] p-[1px]"
            >

              <div
                className={`absolute inset-0 bg-gradient-to-r ${reel.gradient}`}
              />

              <div className="relative glass rounded-[35px] p-10 h-full">

                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${reel.gradient} text-white text-sm font-semibold`}
                >

                  MOST POPULAR

                </div>

                <h3 className="text-3xl font-black mt-8 text-black">

                  {reel.title}

                </h3>

                <p className="text-gray-500 mt-2">

                  {reel.subtitle}

                </p>

                <div className="mt-8">

                  <span className="text-6xl font-black gradient-text">

                    {reel.price}

                  </span>

                </div>

                <div className="mt-10 space-y-4">

                  {reel.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${reel.gradient}`}
                      />

                      <p className="text-gray-700">

                        {feature}

                      </p>

                    </div>
                  ))}

                </div>

                <button
                  className={`mt-10 w-full py-4 rounded-2xl bg-gradient-to-r ${reel.gradient} text-white font-semibold hover:scale-105 transition duration-300 shadow-xl`}
                >

                  Choose Package

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}