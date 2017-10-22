<template>
<div class="form">
    <div>
        <h1>form component</h1>
        <div class="alert"> <!--здесь мы выводим нашу модель -->
            text: {{fields.text}} <br>
            radio: {{fields.radio}} <br>
            select: {{fields.select}} <br>
            checkboxes: {{fields.checkboxes}} <br>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" v-model="fields.text"> <!-- подключаем директиву v-model которая меняет данные в модели data.fileds.text, котороемы выводим в allert-->
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" v-model="fields.select"> <!-- получаем value селектов, иначе будем получать содержимое селекта-->
                <option value="76">Кастрюля</option>
                <option value="13">Сководка</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
            </select>
        </div>
        <div class="form-group">
            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="radio" value="yes" v-model="fields.radio"> Yes
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="radio"  name="radio" value="no" v-model="fields.radio"> No
                </label>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check form-check-inline">
                <label class="form-check-label">
                    <input class="form-check-input"  type="checkbox" value="option1" v-model="fields.checkboxes"> 1
                </label>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">
                    <input class="form-check-input"  type="checkbox" value="option2" v-model="fields.checkboxes"> 2
                </label>
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label">
                    <input class="form-check-input"  type="checkbox" value="option3" v-model="fields.checkboxes"> 3
                </label>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default { //заведем поля для инпутов в нашей модели
    data: () => ({ //в компонентах функция должна возвращать объект, это стрелочная функция ES6
        fields: { // объект с полями
            text: '',
            select: '',
            radio: '',
            checkboxes: []
        }
    }),
    methods: { // методы могут обрабатывать данные полученные из модели/представления
        sendData() {
            this.fileds.text = ''; // юберем данные из модели через this.fileds.text, после чего очищаем форму
        }
    },
    mounted() { // по хуку mounted, задаем значения в модели
        this.fields.radio = 'yes';
    }
}
</script>

<style lang="scss">
    .form {
        margin-top: 10px;
        border: solid 3px purple;
        padding: 10px;
        width: 300px;
    }
    .alert {
        background-color: yellow;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    h1 {
        text-align: center;
    }
</style>
