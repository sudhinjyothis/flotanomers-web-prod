## Flotanomers Website

This is an official website of Flotanomers R & D Pvt Ltd. It is built using Next.js.

#### Where to look for examples

- You can find up to date examples of how to use Next.js at https://github.com/vercel/next.js

- For an example of how to add authentication to Next.js project, check out NextAuth.js at https://next-auth.js.org

  There is a NextAuth.js example project with live demo at http://next-auth-example.now.sh

## About

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

## Running locally in development mode

To get started, just clone the repository and run `yarn install && yarn dev`:

    git clone https://gitlab.com/sudhinjyothis/flotanomers-web.git
    yarn install
    yarn dev

## Building and deploying in production

We are deploying the website in vercel and it is automated with gitlab CI/CD.
You have to push it to the repository and it will be deployed automatically.
Steps to be followed to push the code to the repository:

1. Create a branch with your name.
2. Push the code to the branch.
3. Create a merge request to the master branch.

   git push origin <branch_name>

to push the code to the repository.

To add remote "origin" to the repository

    git remote add origin https://gitlab.com/sudhinjyothis/flotanomers-web.git

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/iaincollins/nextjs-starter/blob/master/.env.example) over to '.env' and fill in the options) you can configure a range of options.

See the [AUTHENTICATION.md](https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md) for how to set up oAuth if you want to do that. It suggested you start with Twitter as it's the easiest to get working.

### Secrets for Environment Variables

Once you are comfortable using `.env` files for configuration and running and deploying your app, take a look at `now secrets` to set options in the cloud so you don't have to set them each time you deploy.

### Alternate hosting options

You can host your Next.js site with any hosting provider. Although it works great on Now, it also works great with other providers like Heroku, Amazon Web Service, Google Cloud Platform, Microsoft Azure, DigitalOcean and others.
