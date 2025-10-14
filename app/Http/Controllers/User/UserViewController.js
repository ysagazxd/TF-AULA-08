

export default async function UserViewController(request, response) {

    return response.render("users", {
        header: "Aula 08 - Bibliotecas JS Frontend, Introdução a react",
        user: request.user
    });

};
