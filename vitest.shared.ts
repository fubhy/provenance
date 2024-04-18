import type { UserConfig } from "vitest/config"

// This is a workaround, see https://github.com/vitest-dev/vitest/issues/4744
const config: UserConfig = {
  esbuild: {
    target: "es2020"
  },
  test: {
    sequence: {
      concurrent: true
    },
    include: ["test/**/*.test.ts"],
  }
}

export default config
