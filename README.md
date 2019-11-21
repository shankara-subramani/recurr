# recurr | RRule library to find recurrences conforming to [rfc5545](https://tools.ietf.org/html/rfc5545)

### [Demo](https://recurr.netlify.com/)


## Now available as remote schema 🔗
#### Graphql Playground
1. Head over to: [https://recurr.glitch.me](https://recurr.glitch.me)
2. Execute a query from the [Sample Query](https://github.com/shankariyerr/recurr/blob/master/README.md#sample-query) section

#### Usage with [Hasura](https://hasura.io/):

1. Remix [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/recurr)

2. Click on **Show** _Live_ at the top of the Glitch UI to get the URL.

3. Add as Remote Schema in Hasura GraphQL Engine.

##### Sample Query
```
query {
  findRecurrences(
    freq: 1
    stDt: "2019-11-25"
    endDt: "2019-12-26"
    wkDay: [0, 1]
  ) {
    recurrences
    rrule
    rruleNLP
  }
}
```


