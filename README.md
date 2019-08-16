# conjugator-backend

Backend server for MyConjugator.

Populates database with verb conjugations from 
https://github.com/ghidinelli/fred-jehle-spanish-verbs

## Lambda Conjugator API Link
```js
https://lambda-conjugator.herokuapp.com/
```
### Register EndPoint
```js
POST /api/register
```
#### Sample Request
```json
{
	"username" : "test",
	"password" : "password"
}
```
#### Success Response
```json
{
  "id": 2,
  "username": "test"
}
```

### Login Endpoint
```js
POST /api/login
```

#### Sample Request
```json
{
	"username" : "test",
	"password" : "password"
}
```
#### Success Response
```json
{
  "message": "Welcome test",
  "your_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NjU5OTY5MjUsImV4cCI6MTU2NjA4MzMyNX0.XsiPj55EPmaWzgqUy4ayPEl1GkxH02AwZbsCdsPkvsk"
}
```

### Verbs
```js
GET /api/conjugator
```

Basic functionality gathers data and creates authorization protected end points through username password system. Authorization varified via use of tokens. If user is not valid, they will not have access to pulled data.