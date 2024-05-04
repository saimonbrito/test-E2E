
import { once } from 'node:events'
import {createServer} from 'node:http'

const validate = {
  user: 'saimonbrito',
  password: '3254'
}

 async function loginRoute (request, response){
 const { user, password } = JSON.stringify(await once(request, 'data'))
 
 if(user !== validate.user || password !== validate.password){
   response.writeHead(4001)
   response.end(JSON.stringify({error: 'user invalid'}))
   return;
 }
 response.end('ok')  
}

async function handler(request,response){
  
  if(request.url === '/login' && response.method === 'POST'){
    
     return loginRoute(request, response)
     
  }
  
}


const app = createServer(handler).listen(3000, () => console.log('login port 3000'))

export{app}