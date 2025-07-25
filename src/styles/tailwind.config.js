module.exports = {
    theme: {
      extend: {
        fontFamily: {
            serif: ['ui-serif','"Noto Serif JP"','serif'],
        },
      },
    },
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  }

  //content→このディレクトリ・この拡張子の中に Tailwind のクラスが書いてあるのを明示するために記載