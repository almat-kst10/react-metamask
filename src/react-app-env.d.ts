declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg" {
    const content: string;
    export default content;
}
declare module "*.scss"
declare module "*.module.scss";
// declare module '*.scss' {
//     const content: Record<string, string>;
//     export default content;
// }