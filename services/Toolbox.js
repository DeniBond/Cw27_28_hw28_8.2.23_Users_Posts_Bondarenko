// Универсальные классы к которым есть доступ из других файлов
class Toolbox {
    // В качестве аргумента можно передать какую либо функцию для
    static formHandler(selector, fun) {
        // Данный метод поднимает селектор для подключения к дому
        let formElement = document.querySelector(selector);
        // подключаемся к форме через querySelector
        formElement.addEventListener('submit', e => {
            // В обработчике формы preventDefault практически обязателен.
            // По стандарту форма очищается и закрывается.
            // Лучше дописать нужные действия вручную.
            // Отмена стандартной реакции на js на форме
            e.preventDefault();
            let obj = {};
            // console.log(formElement.elements)
            // Обрабатываем странный массив элементов в полноценный массив с которым можно взаимодействовать
            const data = Array.from(formElement)
                // Фильтруем item у которых есть имя
                .filter(item => item.name)
                .map(element => {
                    //     Деструктурирующее присваивание
                    //     Будет 2 переменных value и name
                    //     Вытянет имя и значения каждого элемента
                    const {name, value} = element;
                    // Значение поля name будет
                    obj[name] = value;
                    return {name, value};
                });
            console.log(data)
            console.log(obj);
            fun(obj);
        })
    }

    static addItemToList(selector, string) {
        // Cоздание элемента
        let listElements = document.querySelector(selector);
        let element = document.createElement('li')
        element.textContent = string;
        // // добавляем в listElement - element
        listElements.append(element)
    }

    static addNavButtonControl(button_selector, element_selectors) {
        const navBtn = document.querySelector(button_selector);
        navBtn.addEventListener('click', e => {
            e.preventDefault();
            element_selectors.forEach((selector, index) => {
                if (index === 0)
                    document.querySelector(selector).classList.toggle('hidden', false);
                else document.querySelector(selector).classList.toggle('hidden', true);
            })
        })
    }

    static formCleaner(selector){
        const removeSelector = document.querySelector(selector)
        while (removeSelector.firstChild){
            console.log(removeSelector.firstChild)
            removeSelector.firstChild.remove()
        }
    }

}
