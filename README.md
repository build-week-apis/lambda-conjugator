# conjugator-backend

https://lambda-conjugator.herokuapp.com/
Backend server for MyConjugator.

Populates database with verb conjugations from 
https://github.com/ghidinelli/fred-jehle-spanish-verbs

Basic functionality gathers data and creates authorization protected end points through username password system. Authorization varified via use of tokens. If user is not valid, they will not have access to pulled data.