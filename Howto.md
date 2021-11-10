# Work tracking

## Step 1: The boilerplate!

Because there is almost no interest in setup a project, I take the time to work on something reusable, formerly, a boilerplate wich use I want to be able to use in my favorite stack.

I choose to combine the best parts I learned during my previous positions:
- VueJS
- Typescript
- Jest
- Cucumber
- Cypress

This boilerplate also include a DockerFile & a dockercompose, to simplify build & tests from scratch.

## Step 2: Front... Whaaat?

Install all packages, and add vuetify to be able to use well tested components.

## Step 3: Create a dumb app, with a research bar and a result area.

Cause I do my best to use TDD / BDD, it's.... complicated. Usually, starting a project is a complicated task. This is not different here, and it is not easy to make all this things work together.

Using TS, there is a lot of complications in component declaration (mapGetters is not used the same way as JS...).

Now I've got something that seems to work well, with the design I've in mind, and fully tested, let's dive through Apollo installation and display my first results!

NB: Apollo provide it's own cache (InMemory), and does not require the usage of VueX (the store). I have to make them work together, according to their respective boundaries.

NB2: There is a base image for cypress in docker. I'll add it later...


