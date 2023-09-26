
# mysql_encrypted_key_connection

This Package will create mysql connection pool from your provided encrypted database config.


### Prerequisites
This package suppose you already know mysql2 pool.You need to set `.env` file with `DATABASE_ENCRYPT_KEY = "Private key"`

## Install
```

npm install mysql_encrypted_key_connection

```

## USAGE

```
const connection = require('mysql_encrypted_key_connection');
const encrypted_database_info = 'xxxxx';
const pool = connection(encrypted_database_info);

pool.query("SELECT * FROM tableName",(err,rows,fields)=>{
    console.log(rows);
})

```

## Authors

* **Sambat Lim** - *github profile* - [https://github.com/sambatlim](https://github.com/sambatlim)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Reference

* [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2)
