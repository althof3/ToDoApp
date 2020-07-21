exports.getDate = () => {
    var today = new Date()

    var option = {
        year: 'numeric',
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    }

    return today.toLocaleDateString('id-ID', option)
}

exports.getDay = () => {
    var today = new Date()

    var option = {
        weekday: 'long',
    }

    return today.toLocaleDateString('id-ID', option)
}