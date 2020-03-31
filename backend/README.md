<p align="center">
  <img width="200" height="80" src="https://i.ibb.co/s3VxkxY/logo.png">
</p>
<p align="center">
  <img width="460" height="400" src="https://i.ibb.co/nLDMy5C/heroes.png">
</p>

## How does it feel to be a hero? (Backend)

First of all you have to setup your backend environment. Make sure that you follow the following steps.

### Get started

It all takes place when you clone this repo:
```bash
https://github.com/thiagovasconcellos/be-the-hero.git
```

Once it's done, run ``yarn`` or ``npm instal`` to setup the packages.

### And it's done

Be-the-hero was designed to be simple as it can be.
Uses a sqlite database, but feel free to edit this by changing the ``knexfile.js`` configuration.

### Routes

Be-the-hero essencially works with 3 routes.

* /sessions
* /incidents
* /ongs


#### Ongs route
  * GET ``/ongs``
  * POST ``/ongs``

#### Post
Be-the-hero uses [celebrate](https://github.com/arb/celebrate) to validate routes. Make sure you use valid values:
```js
const ong = {
  name: 'Default', 
  email: 'default@ong.com', 
  whatsapp: 5511900000000, 
  city: 'Sào Paulo',
  state: 'SP'
  }
```

When you create a new ONG you should receive an ID. You'll use this ID to login.

#### Sessions route

  * POST ``/sessions``

To login into application just pass a valid ID from a existing ONG.

#### Incidents route
  * LIST (GET) ``/ongs``
  * INDEX (GET) ``/ongs/ong``
  * POST ``/ongs``
  * DELETE ``/ongs/id``

To create a new incident:
```js
const incident = {
  title: 'Some title',
  description: 'Some description',
  value: 200,
  ong_id: '241ad78c',
  }
```

### Tests
Be-the-hero use [jest](https://jestjs.io/) to test itself.

### Built with

  * [ExpressJS](https://expressjs.com/)
  * [knex](http://knexjs.org/)
  * [sqlite](sqlite.org/index.html)
  * [jest](https://jestjs.io/)
  * [celebrate](https://github.com/arb/celebrate)

### Linting by

  * [ESLint](https://eslint.org/)
  * [Prettier](https://prettier.io/)

### Authors

  * **Thiago Vasconcellos**

### License

This project is licensed under the MIT License - see the LICENSE.md file for details