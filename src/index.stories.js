import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import SearchPage from "./searchPage";


export const story = () => 
createElement("c-search-page", { is: SearchPage });