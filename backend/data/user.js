import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'samirbiswas47@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Sanjukta Patra',
        email: 'sanjuktap129@gmail.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Samir Biswas',
        email: 'samirbiswas.softech@gmail.com',
        password: bcrypt.hashSync('123456',10)
    }

]
export default users