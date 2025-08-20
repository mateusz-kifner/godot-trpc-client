// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

const PHASE_PRODUCTION_BUILD = "phase-production-build"; // see next/constants

/** @type {(phase: string, { defaultConfig }: import('next').NextConfig ) => import('next').NextConfig}*/
export default (phase) => {
  /** @type {import('next').NextConfig} */
  let nextConfig = {
    reactStrictMode: true,
  };

  if (phase === PHASE_PRODUCTION_BUILD) {
    console.log("BUILDING PRODUCTION");
    nextConfig = {
      ...nextConfig,
      // disable typecheck when building in prod to speed up deployments
      typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
      experimental: {
        // HACK: limit CPU usage when building in prod(test server cannot handle load)
        // HACK: remove this if we upgrade from small.pl hosting
        workerThreads: false,
        cpus: 1,
      },
    };
  }
  return nextConfig;
};
