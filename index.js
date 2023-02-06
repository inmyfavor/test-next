require( 'ignore-styles' );
// транспилируем на лету импорты
require( '@babel/register')();
// импортируем express-сервер
require( './app.js' );