// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"
import auth from "Config/auth"

export default class AuthController 
{
    public async Login({auth,request,response})
    {
        try
        {
            const email=request.input('email')
            const password=request.input('password')
            const user=await User
            .query()
            .where('email',email)
            .where('password',password)
            .firstOrFail()
            const token=auth.use('api').generate(user)
            return token
        }
        catch{
            return response.badRequest('Usuario no valido')
        }
    }
    public async getUser({auth})
    {
        await auth.use('api').authenticate()
        const user=auth.use('api').user.$attributes
        return user
    }
}
