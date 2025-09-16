import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
};

export default withFlowbiteReact(nextConfig);
