/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "change-case-keys" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCaseKeys: (...args: any[]) => any;
  export default changeCaseKeys;
}
