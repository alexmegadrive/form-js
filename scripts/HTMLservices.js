'use strict'

class HTMLService {

    paintCarDetails() {
        return `
        <div>
        <div class="description-line">
        <label for="car_brand">Марка авто</label>
        <select name="car_brand">
            <option value="default" selected disabled hidden>Выбрать</option>
            <option value="VW">VW</option>
            <option value="Audi">Audi</option>
            <option value="Toyota">Toyota</option>
        </select>
    </div>
    <div class="description-line">
        <label for="year">Год выпуска</label>
        <input type="number" name="year">
    </div>
    <div class="description-line">
        <label for="distance">Пробег</label>
        <input type="number" name="distance">
    </div>
    <div class="description-line">
        <label for="car_transmission">Трансмиссия</label>
        <select name="car_transmission">
            <option value="default" selected disabled hidden>Выбрать</option>
            <option value="Автоматическя">Автомат</option>
            <option value="Ручная">Ручная</option>
            <option value="Вариатор">Вариатор</option>
        </select>
    </div>
        </div>`
    }
    paintPhoneDetails() {
        return `
        <div>
        <div class="description-line">
        <label for="phone_brand">Бренд</label>
        <select name="phone_brand">
            <option value="default" selected disabled hidden>Выбрать</option>
            <option value="Apple">Apple</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Samsung">Samsung</option>
        </select>
    </div>
    <div class="description-line">
        <label for="phone_display">Диагональ, см.</label>
        <input type="number" name="phone_display">
    </div>
 
    <div class="description-line">
        <label for="phone_ram">ОЗУ, Mb</label>
        <input type="number" name="phone_ram">
    </div>

    <div class="description-line">
        <label for="phone_bluetooth">Bluetooth</label>
        <input type="checkbox" name="phone_bluetooth">
    </div>
    <div class="description-line">
        <label for="phone_wifi">Wi-Fi</label>
        <input type="checkbox" name="phone_wifi">
    </div>
    <div class="description-line">
    <label for="phone_2sim">2 сим-карты</label>
    <input type="checkbox" name="phone_2sim">
</div>
        </div>`
    }
    paintEstateDetails() {
        return `
        <div>
        <div class="description-line">
        <label for="estate_type">Тип</label>
        <select name="estate_type">
            <option value="default" selected disabled hidden>Выбрать</option>
            <option value="new">Новое</option>
            <option value="used">Вторичное</option>
        </select>
    </div>
    <div class="description-line">
        <label for="estate_rooms">Планировка</label>
        <select name="estate_rooms">
            <option value="default" selected disabled hidden>Выбрать</option>
            <option value="studio">Студия</option>
            <option value="1+1">1+1</option>
            <option value="2+1">2+1</option>
            <option value="3+1">3+1</option>
            <option value="4+1">4+1</option>
        </select>
    </div>
    <div class="description-line">
        <label for="estate_size">Площадь, м2</label>
        <input type="number" name="estate_size">
    </div>
    <div class="description-line">
        <label for="estate_balcony">Есть балкон</label>
        <input type="checkbox" name="estate_balcony">
    </div>
    <div class="description-line">
        <label for="estate_gas">Есть газ</label>
        <input type="checkbox" name="estate_gas">
    </div>
        </div>`
    }
    createImage(src) {
        return `
        <img class="previewImage" src="${src}" alt="">
        `

    }
    showElement(element) {
        element.style.display = 'block'
    }
    hideElement(element) {
        element.style.display = 'none'
    }
}