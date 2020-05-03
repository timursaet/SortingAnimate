define(['base/component', 'component/guide/guide', 'css!component/mainPage/style.css'], (Component, Guide) => {
    class mainPage extends Component {
        constructor() {
            super();
        }

        render() {
            let guide = new Guide();
            return `
                    <div class="wrapper">

                    <button class="wrapper__randomGenerate">Сгенерировать случайные числа</button>
                    <button class="wrapper__sorting" disabled>Отсортировать числа</button>
            
                    <div class="wrapper__info">
                        <span class="wrapper__info_result"></span><br>
                        <span class="wrapper__info_cur_step"></span><br>
                        <span class="wrapper__numbers"></span>
                    </div>
            
                    <div class="wrapper__div"></div>
            
                   ${guide}  
            
                </div>
            `;
        }

        afterRender() {
            document.querySelector(".wrapper__randomGenerate").addEventListener("click", this.btnRandomGenerate);       
            document.querySelector('.wrapper__sorting').addEventListener("click", this.sorting);
        }

        btnRandomGenerate() {
            document.querySelector('.wrapper__numbers').innerHTML = '';
            document.querySelector('.wrapper__div').innerHTML = '';
            for (let i = 0; i < 10; i++ ) {
                let generateNumber = Math.round(Math.random() * 100 );
                arr[i] = generateNumber;
                document.querySelector('.wrapper__numbers').innerHTML = 'Исходные числа: '+ arr;
                document.querySelector('.wrapper__div').innerHTML += `<div class="wrapper__div_number">${generateNumber}</div>`;
            }
            document.querySelector('.wrapper__sorting').removeAttribute('disabled');
        }

        sorting() {
            let step = 1;
            sow();
            function sow() {
        
            if (step < 11) {
                document.querySelector('.wrapper__info_cur_step').innerHTML = 'Текущий проход: ' + step + '/10';
                step++;
                let i = 1;
                document.querySelector('.wrapper__info_result').innerHTML = 'Идет сортировка..';
                let num1, num2, elem1, elem2;
                sort();
        function sort() { 
            if (i < 10) {    
                if (arr[i] < arr[i-1]) {
                    num1 = i; num2 = i - 1;
                    elem1 = document.querySelector('.wrapper__div').children[num1].innerHTML;
                    elem2 = document.querySelector('.wrapper__div').children[num2].innerHTML;
                 
                    let tempDiv = document.querySelector('.wrapper__div').children[num1].innerHTML;
                        document.querySelector('.wrapper__div').children[num1].innerHTML = document.querySelector('.wrapper__div').children[num2].innerHTML;
                        document.querySelector('.wrapper__div').children[num2].innerHTML = tempDiv;
                        
                        let temp = arr[i];
                        arr[i] = arr[i-1];
                        arr[i-1] = temp;

                        timeoutID = setTimeout(sort, 1000);
                } 
                    else {
                        timeoutID = setTimeout(sort, 0);
                    }
                i++;
            } 
            else {
                    clearInterval(intervalID); 
                    sow()
                    ntervalID = setInterval(sow, 10000);   
                }
        };
    }
        else {
            clearTimeout(timeoutID);
            clearInterval(intervalID);
            document.querySelector('.wrapper__info_result').innerHTML = 'Cортировка окончена!';
           }
        }
    }
}
    return mainPage;

});