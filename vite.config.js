import {
  defineConfig,
  pluginBundle,
  pluginEntry,
  pluginImage,
  pluginSprite,
  pluginSsg
} from "minista"
import path from 'path'

const assetFileNames = (assetInfo) => {
  const name = assetInfo.name ?? ''
  const originalNames = assetInfo.originalFileNames ?? []

  const isSprite = originalNames.some((file) =>
    file.replaceAll('\\', '/').includes('/.minista/sprite/'),
  )

  if (name.endsWith('.css')) {
    return 'assets/css/[name][extname]'
  }

  if (isSprite) {
    return 'assets/sprites/[name][extname]'
  }

  if (/\.(png|jpe?g|gif|bmp|svg|webp|avif)$/.test(name)) {
    return 'assets/images/[name][extname]'
  }

  if (/\.(mp4|webm|ogg|mov|avi|mkv)$/.test(name)) {
    return 'assets/videos/[name][extname]'
  }

  if (/\.(woff2?|ttf|otf|eot)$/.test(name)) {
    return 'assets/fonts/[name][extname]'
  }

  return 'assets/others/[name][extname]'
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    base: isProd ? '/anime-vibe/' : '/',
    plugins: [
      pluginSsg({
        layout: "/src/layouts/global.{tsx,jsx}",
      }),
      pluginBundle({
        src: ["/src/layouts/global.{tsx,jsx}", "/src/pages/**/*.{tsx,jsx,mdx}"],
        outName: "bundle",
        useExportCss: true,
      }),
      pluginEntry(),
      pluginImage({
        useCache: true,
        optimize: {
          outName: "[name]-[width]x[height]",
          remoteName: "remote-[index]",
          layout: "constrained",
          breakpoints: [320, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840],
          resolutions: [1, 2],
          aspect: undefined,
          format: "webp",
          formatOptions: {},
          quality: undefined,
          fit: "cover",
          position: "centre",
          background: undefined,
        },
        decoding: "async",
        loading: "eager",
      }),
      pluginSprite({
        config: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: ['fill', 'stroke']
              }
            }
          ]
        }
      }),
    ],
    resolve: {
      alias: [{
        find: '@/',
        replacement: path.resolve('src') + '/'
      }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/styles/helpers' as *;
        `
        }
      }
    },
    build: {
      rolldownOptions: {
        output: {
          assetFileNames,

          chunkFileNames: 'assets/js/[name].js',

          entryFileNames: 'assets/js/[name].js',
        },
      },
    },
  }
})