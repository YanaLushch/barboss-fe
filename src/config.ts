type Config = {
  loginUrl: string;
  ApiResponseBodyCase: "camelize" | "underscored";
};

const config: Config = {
  loginUrl: "/login",
  ApiResponseBodyCase: "underscored",
};

export default config;
