import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const userRepository = AppDataSource.getRepository(User)

    console.log("Inserting a new user into the database...")
    // const user1 = new User()
    // user1.firstName = "Timber"
    // user1.lastName = "Saw"
    // user1.age = 25
    // await AppDataSource.manager.save(user1)
    
    let users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    // Create user(Oleg)
    // const user2 = new User()
    // user2.firstName = 'Oleg'
    // user2.lastName = 'Olegovich'
    // user2.age = 100
    // await AppDataSource.manager.save(user2)

    // Update user(Timber)
    const timber = await userRepository.findOneBy({
        id: 2
    })

    timber.firstName = 'Pahan'

    await userRepository.save(timber)
    
    users = await AppDataSource.manager.find(User)
    console.log(
        'Updated list: ', users
    )

}).catch(error => console.log(error))
