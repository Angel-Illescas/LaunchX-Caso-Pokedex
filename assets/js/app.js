const $imagen = document.querySelector('#pokeImg')
const $name = document.querySelector('#name')
const $type = document.querySelector('#type')
const $abilities = document.querySelector('#abilities')
const $hp = document.querySelector('#hp')
const $attack = document.querySelector('#attack')
const $defense = document.querySelector('#defense')
const $specialAttack = document.querySelector('#specialAttack')
const $specialDefense = document.querySelector('#specialDefense')
const $speed = document.querySelector('#speed')
const $inpSearch = document.querySelector('#searchPoke')

/* Onclick Cross */

const fetchPokemon = () => {
    event.preventDefault();
    let sonido= document.getElementById("click");
    sonido.play();
    const pokeNameInput = document.getElementById("searchPoke");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./../../assets/img/whos01.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            /* Value of Image */
            const pokeImg = data.sprites.front_default
            pokeImage(pokeImg);
            /* Value of Name */
            const pokeName = data.species.name.toUpperCase()
            pokeNombre(pokeName)
            /* Value of Type */
            const pokeType = data.types[0].type.name.toUpperCase()
            pokeTipo(pokeType)

            console.log(pokeImg);
            console.log(pokeName);
            console.log(pokeType);

            /* Value of abilities */
            const pokeAbility = data.abilities
            nameAbi =''
            for (let i = 0; i < pokeAbility.length; i ++){
                nameAbi += (pokeAbility[i].ability.name.toUpperCase() + ' ') 
                console.log(nameAbi);
                pokeHabi(nameAbi);
            }
            /* Value of Pogress Bars */
                /* Hp */
            const pokeHp = data.stats[0].base_stat
            pokeHp1(pokeHp);
                /* Attack */
            const pokeAtta = data.stats[1].base_stat
            pokeAttack(pokeAtta);
                /* Defense */
            const pokedefense = data.stats[2].base_stat
            pokeDef(pokedefense);
                /* Special Attack */
            const pokeSA = data.stats[3].base_stat
            pokeSpeAtta(pokeSA);
                /* Special Defense */
            const pokeSDef = data.stats[4].base_stat
            pokeSpeDef(pokeSDef);
                /* Speed */
            const pokeSpeed = data.stats[5].base_stat
            pokeSpeed1(pokeSpeed);   
        }
    })
};

const pokeImage = (url) => {
    $imagen.src = url;
};

const pokeNombre = (ele) => {
    $name.placeholder = ele;
};

const pokeTipo = (type) =>{
    $type.placeholder = type;
};

const pokeHabi = (abi) =>{
    $abilities.placeholder = abi;
};

const pokeHp1 = (hp) =>{
    $hp.style.width = (hp+'%')
};

const pokeAttack = (ata) =>{
    $attack.style.width = (ata+'%')
};

const pokeDef = (def) =>{
    $defense.style.width = (def+'%')
}

const pokeSpeAtta = (esp) =>{
    $specialAttack.style.width = (esp+'%')
}

const pokeSpeDef = (esp) =>{
    $specialDefense.style.width = (esp+'%')
}

const pokeSpeed1 = (spe) =>{
    $speed.style.width = (spe+'%')
}

/* OnEnter Funtion */

document.querySelector('#searchPoke').addEventListener ('keypress',function(e){
    validar(e);
  })

function validar(e) {
  let tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13) {
    e.preventDefault(); 
    let sonido= document.getElementById("click");
    sonido.play();
    fetchPokemon();
    }
}