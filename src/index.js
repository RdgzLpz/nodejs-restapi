//  This file is responsible of Running the server 
import '@babel/polyfill';

import app from './server';


async function main() {
        await  app.listen(app.get('port'));
        console.log( 'Server on port', app.get('port') );
}

main();