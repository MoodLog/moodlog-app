module.exports = {
  env: {
    node: true, // Node.js 환경 전역 변수 허용
    "react-native/react-native": true, // React Native 환경 전역 변수 허용
  },
  overrides: [
    {
      files: ["*.config.js", "metro.config.js"], // 특정 설정 파일만
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        // config 파일에서 require 사용 허용 (TypeScript에서는 기본적으로 금지)
      },
    },
  ],
  extends: [
    "eslint:recommended", // ESLint 기본 추천 규칙 적용
    "plugin:@typescript-eslint/recommended", // TypeScript 권장 규칙
    "plugin:react/recommended", // React 권장 규칙
    "plugin:react-hooks/recommended", // React Hooks 권장 규칙
    "plugin:react/jsx-runtime", // React 17+ JSX transform 관련 규칙
    "plugin:react-native/all", // React Native 모든 권장 규칙
    "prettier", // Prettier와 충돌나는 ESLint 규칙 비활성화
  ],
  plugins: [
    "unused-imports", // 사용하지 않는 import 제거
    "import", // import 순서 / 규칙 체크
    "@typescript-eslint", // TypeScript 전용 lint
    "prettier", // Prettier 스타일 체크
    "react-native", // RN 전용 lint
  ],
  parser: "@typescript-eslint/parser", // TypeScript 문법 분석기
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 구문 허용
    },
    ecmaVersion: 2021, // 최신 ES 문법 지원
    sourceType: "module", // import/export 사용
    tsconfigRootDir: __dirname, // tsconfig.json 경로 기준
    project: ["./tsconfig.json"], // TypeScript 프로젝트 파일 지정
  },
  settings: {
    react: {
      version: "18.2.0", // React 버전 명시
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // OS별 개행문자 차이 자동 처리
      },
    ],
    "arrow-body-style": "off", // 화살표 함수 몸체 형태 자유롭게
    "prefer-arrow-callback": "off", // 콜백에서 반드시 화살표 함수 강제하지 않음
    curly: "error", // if, for, while 등의 블록에 중괄호 필수

    "react-native/no-unused-styles": "warn",
    // StyleSheet 정의 후 사용 안 하는 스타일 경고

    "no-nested-ternary": "warn", // 중첩 삼항연산자 사용 시 경고
    "react/destructuring-assignment": "off", // props/state 비구조화 사용 강제 X
    "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용 시 경고

    // 사용하지 않는 import / 변수 관련 규칙
    "no-unused-vars": "off", // 기본 ESLint unused var 비활성
    "@typescript-eslint/no-unused-vars": "off", // TS plugin unused var 비활성
    "unused-imports/no-unused-imports": "error",
    // 사용하지 않는 import가 있으면 에러
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all", // 모든 변수 대상
        varsIgnorePattern: "^_", // _로 시작하는 변수는 허용
        args: "after-used", // 사용하지 않은 인자 중 마지막 이후만 체크
        argsIgnorePattern: "^_", // _로 시작하는 인자는 허용
      },
    ],

    // import 순서 관련 규칙
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index", "object", "type"],
        ],
        // import 그룹 순서: Node 내장 모듈 > 외부 라이브러리 > 내부 > 부모/형제/현재 > 타입
        alphabetize: {
          order: "asc", // 알파벳 오름차순 정렬
          caseInsensitive: true, // 대소문자 구분 없이 정렬
        },
        "newlines-between": "always", // 그룹 사이 빈 줄 필요
      },
    ],
    "import/first": "error", // import는 항상 최상단에
    "import/newline-after-import": "error", // import 뒤 빈 줄 필수
    "import/prefer-default-export": "off", // default export 강제하지 않음
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    // 불필요한 경로 세그먼트 사용 금지 (ex: './index')

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "const", next: "*" }, // const 선언 후 빈 줄 필요
      { blankLine: "any", prev: "const", next: "const" }, // const 연속 시 빈 줄 허용
    ],
  },
};
