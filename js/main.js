const baby = document.querySelector('#baby')
const prime = document.querySelector('#prime')
const mid = document.querySelector('#mid')
const old = document.querySelector('#old')
document.querySelector('#check').addEventListener('click', check)
function check(){
    let age = Number(document.querySelector('input').value)
    age = age + 10
    document.querySelector('#newAge').innerText = age
    event.preventDefault()
    if(age <= 20){
        baby.classList.toggle('hidden')
        prime.classList.add('hidden')
        mid.classList.add('hidden')
        old.classList.add('hidden')
        document.querySelector("#fate").innerText = "You're still a baby"
    }else if(age > 20 && age < 30){
        baby.classList.add('hidden')
        prime.classList.toggle('hidden')
        old.classList.add('hidden')
        document.querySelector("#fate").innerText = "You're in your prime, baby! Enjoy it while you can."
    }else if(age >= 30 && age < 60){
        baby.classList.add('hidden')
        prime.classList.add('hidden')
        mid.classList.toggle('hidden')
        old.classList.add('hidden')
        document.querySelector("#fate").innerText = "You're getting so old and disgusting"
    }else if(age >= 60){
        baby.classList.add('hidden')
        prime.classList.add('hidden')
        mid.classList.add('hidden')
        old.classList.toggle('hidden')
        document.querySelector("#fate").innerText = "You might as well be a fart in the wind"
    }
}
