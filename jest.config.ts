export default {

  clearMocks: true,
  
  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },

  testRegex: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"],

  transform: { "^.+\\.tsx?$": "ts-jest" },
};
