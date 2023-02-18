# web_clone_exercise
Cloning web page to kill time  
  
# Intro
All clone in this repo is created with :
1. React
2. styled_components
3. sadd
4. heroicons
5. zustand
6. Vite
7. TailwindCSS

VSCode extension:
1. ES7+React
2. TailwindCSS Intellisense
3. vscode-styled-components 

> Tailwind just used for responsive purpose like p-2, md:m-3, etc, mostly used in Block on BEM model.  
> Currently twin.macro (babel) is not supported in swc compiler (typescript+swc).  
> zustand is used, because its easier in personal preference.  
  
## Init Project  
npm install -g vite@latest  
  
npm create vite@latest  # react, typescript + swc  
  
\# cd to project folder
  
npm install --save styled-components react-router-dom @heroicons/react zustand react-query axios
npm install -D sass @types/styled-components 
  

### Prepare Tailwind  
npm install --save @material-tailwind/react  
npm install -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss  
  
npm install -g npx  
npx tailwindcss init --full  
  
edit  tailwind.config.cjs  
```
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  ...
});
```
  
edit  postcss.config.cjs  
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
});
```

edit ./src/index.css  
```  
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
...
```  
  
### Prepare Folder 
Rename ./src/index.css to ./src/index.scss  
Rename ./src/App.css to ./src/App.scss  
  
In ./src/index.tsx : rename import './index.css' to import './index.scss'  
In ./src/App.tsx : rename import './App.css; to import './App.scss'  

### Setup Root Path  
edit tsonfig.json (for editor)  
```  
{
  "compilerOptions": {
    ....,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
    },
  },
}
```  

edit vite.config.ts  (for editor)
```  
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
})
```  

### Create Folder & File
'./src/stores.js' // zustand global state
'./src/router.js' // list router  
  
'./src/elements/index.tsx'   // Element in BEM model    
'./src/components/index.tsx'   // Block in BEM model    
  
'./src/pages'   // List Page   
  
'./src/layouts/index.tsx'        // List Layout   
'./src/layouts/NoLayout.tsx'     // Layout before login  
'./src/layouts/MainLayout.tsx'   // Layout after login  
  
...more detail --> see folder 00_base  


