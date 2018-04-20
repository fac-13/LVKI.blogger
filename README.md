# LVKI.blogger
https://lvki.herokuapp.com/

## How to install

clone repo
```bash
$ git clone https://github.com/fac-13/LVKI.blogger.git
```

install dependencies
```bash
$ npm i
```

create .env and add
```bash
LVKI_DB_URL = postgres://[username]:[password]@localhost:5432/[database name]
TEST_DATABASE_URL = postgres://[username]:[password]@localhost:5432/[test database name]
SECRET = [secret for cookie]
```

build database
```bash
$ npm run build:db
```

run server
```bash
$ npm start
```

run tests
```bash
$ npm test
```


## User Stories
- When user lands on page they see a list of blog posts `cards`
- When a user clicks a card you will be sent to the page of the blog post
- There will be a navbar on each view
    - Before user logs in, the user will see:
        - login and sign up
    - After a user logs in:
        - avatar, username & logout

- There will be a separate view for login and signup

- The landing page of a logged in user will have a form at the top of the page to add a new blog post



## Stretch Goal
- User profile page


## Day 1
- Discuss user stories
- Design database schema
- Design architecture
- Set up dev environment
    - `.env` will hold three variables: 
        - `DATABASE_URL`
        - `TEST_DATABASE_URL`
        - `SECRET`

- set up data
- set up express using handlebars
- set up controlers to respond on 
    - `/`, `/post`
- views
    - `main.hbs` layout
    - `home.hbs` view
    - `post.hbs` view
    - 
## Day 2
- created more views
- added user authentication on server
- getting post page view
- showing user in the navbar
- logout button

- posting data to the database when someone creates a new blog post
- logout user (POST)
