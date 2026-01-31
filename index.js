function matrix(w, h) {
    const arr = []

    for (let i = 0; i <= h; i++) {
        arr[i] = []
    }

    let num = 0

    let top = 0 // двигается вниз
    let right = w // влево
    let bottom = h // двигается вверх
    let left = 0 // вправо

    // формулировка: пока не сожмется полностью, то
    while (top <= bottom && left <= right) {

        // идем слева направо, как дошли до конца - сужаем top( top++ ), мы на новой строке
        for (let i = left; i <= right; i++) {
            arr[top][i] = num++
        }
        top++

        // теперь идем с верха до низу, не забываем "завернуть" right внутрь
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++
        }
        right-- // --, потому что "заворачиваем" внутрь(а именно налево)

        // справа идем налево,"заворачиваем" нижнюю сторону внутрь
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = num++
        }
        bottom--

        // с низа дойдем до новой границы верха( bottom-- ), "заворачиваем" левую сторону внутрь
        // готово, цикл в (рекурсии?)
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = num++
        }
        left++
    }

    return arr
}

const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    const width = +prompt('Введите ширину матрицы', '0')
    const height = +prompt('Введите высоту матрицы', '0')

    const res = matrix(width, height)
    console.table(res)
    console.log(`width - ${width}, height - ${height}`)

    const h1 = document.createElement('h1')
    h1.innerHTML = `Проверьте консоль через DevTools!`
    document.body.appendChild(h1)
})