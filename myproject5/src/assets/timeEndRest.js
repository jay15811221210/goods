
Date.prototype.timeEndRest = function (endTime) {
    let surplus = endTime - (this.getTime() / 1000)
    let day = Math.floor(surplus / 60 / 60 / 24)
    let hour = Math.floor(surplus / 60 / 60 % 24)
    let minute = Math.floor(surplus / 60 % 60)
    let second = Math.floor(surplus % 60)
    day = day > 9 ? day.toString() : day < 0 ? '0' : `0${day}`
    hour = hour > 9 ? hour.toString() : hour < 0 ? '0' : `0${hour}`
    minute = minute > 9 ? minute.toString() : minute < 0 ? '0' : `0${minute}`
    second = second > 9 ? second.toString() : second < 0 ? '0' : `0${second}`
    return {
        time: `${day < 0 ? 0 : day}天${hour < 0 ? 0 : hour}时${minute < 0 ? 0 : minute}分${second < 0 ? 0 : second}秒`,
        day: day, 
        hour: hour, 
        minute: minute, 
        second: second,
        endStatus: surplus > 1 ? false : true,
        surplus: surplus
    }
}

export default endTime => new Date().timeEndRest(endTime)
