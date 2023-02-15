const baseUrl = 'https://jsonplaceholder.typicode.com';
//создаём объект для хранилища
const users = new Users();
const posts = new Posts();
const controller = new Controller(users, posts);

const list = document.querySelector('#list');

(async () => {
    // Читается как синхронный код
    // На каждом этапе можно взять переменную и работать с ней отдельно
    const response = await fetch(`${baseUrl}/users`);
    const json = await response.json();
    // json.then (data => data. forEach (item => {
    //     controller.createUser (item)
    //     console.log(item)
    // }));

    await (json.forEach(user => controller.createUser(user)));
    // Все юзеры которые получились из запроса записаны в хранилище, мы хотим вывести их на дисплей
    // Выводим данные поля для юзера

    // Пользуемся тем что получили от запроса к серверу.
    // Каждый из элементов засовываем метод
    await controller.processUsers(user => Toolbox.addItemToList
    ('ul',
        `User ID: ${user.id} , user Name: ${user.name},
         user Nickname: ${user.username}`))
})();

//************************FORM USER HANDLER *******************
Toolbox.formHandler('#form_user', user => {
    // Добавление нового юзера которого получили из formHandler

    controller.createUser(user);
    Toolbox.addItemToList('ul', `User ID: ${user.id} ,
     user Name: ${user.name},
     user Nickname: ${user.username}`)
});

//************************FORM ADD POST ************************
Toolbox.formHandler('#form_add_post', item => {
    let post = {
        title: item.title,
        body: item.body,
        userId: item.userId
    };
    fetch(`${baseUrl}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
    ).then(response => response.json())
        .then(data => {
            controller.createPost(data)
            alert(`Post by User#${data.userId} successfully added`)
        })
        .catch(e => console.log(e));
})

//**********************FORM GET POSTS**************************


Toolbox.formHandler('#form_get_posts', item => {
    fetch(`${baseUrl}/posts`)
        .then(response => response.json())
        .then(dataPosts => {
            dataPosts.forEach(post => controller.createPost(post))
            Toolbox.formCleaner('#list')
            posts.getAll().find(post => {
                if (+post.userId === +item.id){
                    Toolbox.addItemToList('ul', `
                    UserID: ${post.userId}, Title: ${post.title}, Body:${post.body}
                    `)
                }
            })
        })
})


















