import dotenv from 'dotenv'
import express from 'express'
dotenv.config();
const app = express()
const port = process.env.PORT || 5000

const personData = {
  "login": "muhammadsaad0077",
  "id": 121814479,
  "node_id": "U_kgDOB0K9zw",
  "avatar_url": "https://avatars.githubusercontent.com/u/121814479?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/muhammadsaad0077",
  "html_url": "https://github.com/muhammadsaad0077",
  "followers_url": "https://api.github.com/users/muhammadsaad0077/followers",
  "following_url": "https://api.github.com/users/muhammadsaad0077/following{/other_user}",
  "gists_url": "https://api.github.com/users/muhammadsaad0077/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/muhammadsaad0077/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/muhammadsaad0077/subscriptions",
  "organizations_url": "https://api.github.com/users/muhammadsaad0077/orgs",
  "repos_url": "https://api.github.com/users/muhammadsaad0077/repos",
  "events_url": "https://api.github.com/users/muhammadsaad0077/events{/privacy}",
  "received_events_url": "https://api.github.com/users/muhammadsaad0077/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-01-02T15:27:48Z",
  "updated_at": "2024-07-29T09:48:14Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/github', (req, res)=>{
  res.json(personData)
})

app.get('/api/jokes', (req, res)=>{
  const jokes = [
    {
      id: 1,
      title: "a joke",
      content: "This is a joke"
    },
    {
      id: 2,
      title: "2nd joke",
      content: "This is a another joke"
    },
    {
      id: 3,
      title: "3rd joke",
      content: "This is a joke"
    },
    {
      id: 4,
      title: "4th joke",
      content: "This is a joke"
    },
    {
      id: 5,
      title: "5th joke",
      content: "This is a joke"
    },
    {
      id: 6,
      title: "6th joke",
      content: "This is a joke"
    },
    {
      id: 7,
      title: "7th joke",
      content: "This is a joke"
    },
  ]
  res.json(jokes)
})

app.get('/login', (req, res)=>{
    res.send("<h1>Login Here to see Web</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})