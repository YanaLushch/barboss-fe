module.exports = function (plop) {
  plop.setHelper("reactPageComponent", function (text) {
    return `{${text}Page}`;
  });
  plop.setHelper("reactPageComponentImport", function (text) {
    return `{ ${text}Page }`;
  });
  plop.setHelper("reactInterfaceImport", function (text) {
    return `{ ${text}s }`;
  });
  plop.setGenerator("component", {
    description: "Create a component (state-less)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name (PascalCase)?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "../../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./Component/component.hbs",
      },
      {
        type: "add",
        path:
          "../../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "./Component/styles.hbs",
      },
      {
        type: "add",
        path:
          "../../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./Component/tests.hbs",
      },
      {
        type: "add",
        path: "../../src/components/{{pascalCase name}}/index.ts",
        template: `export { default } from "./{{pascalCase name}}";\n`,
      },
    ],
  });
  plop.setGenerator("container", {
    description: "Create a container (state-full)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name (PascalCase)?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "../../src/containers/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./Container/container.hbs",
      },
      {
        type: "add",
        path:
          "../../src/containers/{{pascalCase name}}/{{pascalCase name}}.styles.ts",
        templateFile: "./Container/styles.hbs",
      },
      {
        type: "add",
        path:
          "../../src/containers/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./Container/tests.hbs",
      },
      {
        type: "add",
        path: "../../src/containers/{{pascalCase name}}/index.ts",
        template: `export { default } from "./{{pascalCase name}}";\n`,
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name (PascalCase)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/pages/{{camelCase name}}/{{pascalCase name}}Page.tsx",
        templateFile: "./Page/page.hbs",
      },
      {
        type: "add",
        path:
          "../../src/pages/{{camelCase name}}/{{pascalCase name}}Page.styles.ts",
        templateFile: "./Page/styles.hbs",
      },
      {
        type: "add",
        path:
          "../../src/pages/{{pascalCase name}}/{{pascalCase name}}Page.test.tsx",
        templateFile: "./Page/tests.hbs",
      },
      {
        type: "add",
        path: "../../src/pages/{{camelCase name}}/index.ts",
        template: `export { default } from "./{{pascalCase name}}Page";\n`,
      },
      {
        type: "modify",
        path: "../../src/pages/Root.tsx",
        pattern: /(\/\/ append pages imports here)/gi,
        template:
          'import {{pascalCase name}}Page from "./{{camelCase name}}/{{pascalCase name}}Page";\r\n$1',
      },
      {
        type: "modify",
        path: "../../src/pages/Root.tsx",
        pattern: /(\{\/\* append pages routes here \*\/\})/gi,
        template:
          '<Route path="/{{dashCase name}}" component={{reactPageComponent (pascalCase name)}} />\r\n        $1',
      },
    ],
  });
  plop.setGenerator("store", {
    description: "Create a store",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your store name (PascalCase)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/stores/{{pascalCase name}}Store.tsx",
        templateFile: "./Store/store.hbs",
      },
      {
        type: "modify",
        path: "../../src/stores/index.ts",
        pattern: /(\/\/ append stores here)/gi,
        template: `import {{camelCase name}}Store from "./{{pascalCase name}}Store";\r\n$1`,
      },
      {
        type: "modify",
        path: "../../src/stores/index.ts",
        pattern: /(\/\/ init stores here)/gi,
        template: `{{camelCase name}}Store,\r\n  $1`,
      },
    ],
  });
  plop.setGenerator("endpoint", {
    description: "Create an endpoint",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your endpoint name (PascalCase, Singular)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/api/{{pascalCase name}}.ts",
        templateFile: "./Endpoint/endpoint.hbs",
      },
    ],
  });
};
