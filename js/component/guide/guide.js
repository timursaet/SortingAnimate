define(['base/component', 'css!component/mainPage/style.css'], (Component) => {

    class guide extends Component {

        constructor() {
            super();
        }

        render() {
            return `           
                    <div class="wrapper__guide">
                        <p class="wrapper__guide_title">Руководство</p>
                        <div class="wrapper__guide_article">
                            <p>1. При первом запуске приложении необходимо сгенерировать случайные числа, нажав кнопку - 
                            "Сгенерировать случайные числа"</p>
                            <p>2. По сгенерированным данным нажать на кнопку - "Отсортировать числа"</p>
                        </div>
                    </div>    
            `;
        }

        /**
         * Добавление событий
         */
        afterRender() {
        }


    }
    return guide;

});