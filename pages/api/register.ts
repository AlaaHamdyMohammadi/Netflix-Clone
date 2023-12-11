import { NextApiRequest ,NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== "POST"){
        return res.status(405).json({message: 'Invalid Request.'});
    }

    try{
        const {username, email, password} = req.body;
        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        })

        if(existingUser){
            return res.status(422).json({error: 'email taken'});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prismadb.user.create({
            data:{
                email,
                username,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })
        return res.status(200).json({message: 'Successfully Created', user})
    }catch(err){
        console.log(err)
        return res.status(400).json({message: 'Error happen!'})
    }
}