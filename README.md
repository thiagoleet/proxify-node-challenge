# Node.js Challenge

## How to setup the project

First of all, you will need Docker

In the root folder, run the command:

```shell
docker-compose up -d
```

Then, run:

```shell
npm install
```

After all, run:

```shell
npx prisma db push
```

## How to run each project

- Start the api service with `npx nest start api-service`
- Start the stock service with `npx nest start stock-service`
