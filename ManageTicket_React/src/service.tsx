import axios from 'axios'
import { ITicket, Result } from './models/ITicket'
import { IAdmin } from './models/IAdmin'
import { Admin } from './models/Admin'
import { Operator } from './models/Operator'
import { User } from './models/User'


const config = axios.create({
  baseURL: 'http://localhost:8060/',
  timeout: 15000
})


//Admin Services

export const adminlogin = (email: string, password: string) => { //admin login service
  const sendObj = {
      email: email,
      password: password
  }
  return config.post('admin/login', sendObj)
}

export const singleAdmin = (aid:string) => {  
  return config.get<Result>('admin/detail/'+aid)
  }
  
  export const adminlist = () => {  
  return config.get<Admin>('admin/list')
   }
  

//Operator Services

export const operatorlogin = (email: string, password: string) => { //operator logins service
  const sendObj = {
      email: email,
      password: password
  }
  return config.post('operator/login', sendObj)
}

export const operatorlist = () => {  
  return config.get<Operator>('operator/list')
   }

   export const singleOperator = (oid:string) => {  
    return config.get<Result>('operator/detail/'+oid)
    }

//User Services

export const userlogin = (email: string, password: string) => { //user logins service
  const sendObj = {
      email: email,
      password: password
  }
  return config.post('user/login', sendObj)
}

export const userregister = (email: string, password: string, name:string, surname: string, title:string, description:string) => {  //user register service
  const sendObj = {
      email: email,
      password: password,
      name:name,
      surname: surname,
      title:title,
      description:description
  }
  return config.post('user/register', sendObj)
}

export const userlist = () => {  
  return config.get<User>('user/list')
   }

   export const singleUser = (uid:string) => {  
    return config.get<Result>('user/detail/'+uid)
    }

//Ticket Services


export const ticketcreate = (subject: string, solutionProvider:string,departmantManager:string,tickedType:string, statusType:string,  description:string,createDate:string) => {  //user register service
  const sendObj = {
    subject: subject,
    description:description,
    solutionProvider:solutionProvider,
    tickedType:tickedType,
    departmantManager:departmantManager,
    statusType: statusType,
    createDate:createDate
  
  }
  return config.post('ticket/save', sendObj)
}

export const ticketlist = () => {
return config.get<ITicket>('ticket/list')
}

export const ticketlistoperator = (oid:string) => {
  return config.get<ITicket>('ticket/list/'+oid)
  }

export const singleTicket = (tid:string) => {  
return config.get<Result>('ticket/detail/'+tid)
  }

  export const updateTicket = (tid:string ,subject: string, solutionProvider:string,departmantManager:string,tickedType:string, statusType:string,  description:string,createDate:string) => {  //user register service
    const sendObj = {
      tid:tid,
      subject: subject,
      solutionProvider:solutionProvider,
      departmantManager:departmantManager,
      tickedType:tickedType,
      statusType: statusType,
      description:description,
      createDate:createDate
    
    }
return config.post('ticket/update/'+tid,sendObj)
      }


