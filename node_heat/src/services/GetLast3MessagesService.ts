import prismaClient from "../prisma"

class GetLast3MessagesService { 
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3, // pegue as 3 
      orderBy: { 
        created_at: "desc" // ordem decrescente
      },
      include: { 
        user: true // trazer junto o usuario
      }
    })

    return messages;
  }
}

export { GetLast3MessagesService }