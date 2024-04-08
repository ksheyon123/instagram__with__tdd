### Introduction

I'm going to start the instagram clone coding project for practicing TDD methodology.

TDD methodology is the most interesting item I've been interested in since I started developing it.

It seems like abolutely by reducing the bug, increasing the productivity, etc...

And finally, I had time to practice it.

### Setup

#### 1. Enviroment

- Nextjs 14
- NextUI & tailwind
- Typescript

- Testing-lib : Cypress & testing-lib/react (RTL)

#### 2. Tailwindcss compiler

> Applying css to the web on hot reloading, cmd will be activated.

compile cli : `npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch`

#### 3. Run test

1. yarn test '<TEST_FILE_NAME>' will run specific jest test file.
2. yarn cypress run will test entire servece (E2E test).
